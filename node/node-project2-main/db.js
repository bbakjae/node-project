const mariadb = require("mariadb")

const pool = mariadb.createPool({
    host: "127.0.0.1",
    port: 3307,
    user: "root",
    password: "12345",
    database: "node_project"
});

async function selectBoards() {
    let conn;
    let result;
    try {
        conn = await pool.getConnection();
        result = await conn.query("select * from board");
    } catch (error) {
        console.log(error);
        result = []
    } finally {
        if (conn) conn.release();
    }
    return result;
}
