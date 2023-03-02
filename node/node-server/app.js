const express = require("express");
const mariadb = require("mariadb");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

const pool = mariadb.createPool({
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWD,
    database: process.env.DB_SCHEMA
})
/**
 * table : Database의 테이블 이름
 * type : select | insert | delete
 * id 
 *  - select : id가 없으면 데이터 전체, id가 있으면 해당하는 데이터만
 *  - delete : id 필수
 */
const databaseTables = ["board"]
app.all("/:table/:type/:id?", async (req, res) => {
    if (req.method === "GET") {
        if (!databaseTables.includes(req.params.table)) {
            res.send({
                status: 400,
                error: "Invalid Parameter `table`"
            })
            return;
        }
        if (req.params.type === "select") {
            // 데이터 조회 후 응답
            const subQuery = req.params.id ?
                `WHERE id=${req.params.id}` : ""
            let conn = await pool.getConnection();
            let result = await conn.query(`
            SELECT * from ${req.params.table}
            `+ subQuery);
            conn.release();
            res.send({
                status: 200,
                data: {
                    boards: result
                }
            })
            return;
        } else if (req.params.type === "insert") {
            // 데이터 생성 후 응답
            const title = req.query.title?.trim();
            if (!title || title.length === 0) {
                res.send({
                    status: 400,
                    error: "Invalid Data `title` : 제목을 입력해주세요."
                })
                return;
            }
            const content = req.query.content?.trim();
            if (!content || content.length === 0) {
                res.send({
                    status: 400,
                    error: "Invalid Data `content` : 본문을 입력해주세요."
                })
                return;
            }
            let conn = await pool.getConnection()
            let result = await conn.query(`
            INSERT INTO ${req.params.table}
            (\`title\`, \`content\`, \`image_url\`, \`writer\`)
            VALUES ('${title}', '${content}', '', 'writer');
            `)
            conn.release()
            res.send({
                status: 200,
                data: {
                    board: result
                }
            })
            return
        } else if (req.params.type === "delete") {
            //데이터 삭제 후 응답
            if (!req.params.id) {
                res.send({
                    status: 400,
                    error: "Invalid Parameter `id` : id is needed"
                })
            }
            let conn = await pool.getConnection()
            conn.query(`
            DELETE FROM ${req.params.table}
            WHERE id=${req.params.id}
            `)
            conn.release()
            res.send({
                status: 200,
                data: true
            })
            return;
        } else {
            res.send({
                status: 400,
                error: "Invalid Parameter `type`"
            })
            return;
        }
    } else {
        res.send({
            status: 400,
            error: "Access Denied"
        })
        return;
    }
})

const port = process.env.PORT ? +process.env.PORT : 3000;
app.listen(port, () => {
    console.log('Server started on port 3000');
})