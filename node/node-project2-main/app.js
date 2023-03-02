const express = require('express');
const nunjucks = require('nunjucks');
const mariadb = require("mariadb")
const dotenv = require('dotenv')
dotenv.config();

const app = express();

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

const imageUrl = [
    `https\:\/\/cdn.pixabay.com/photo/2023/02/05/17/25/leaves-7770035_960_720.jpg`,
    `https\:\/\/cdn.pixabay.com/photo/2022/12/25/04/05/living-room-7676789_640.jpg`,
    `https\:\/\/cdn.pixabay.com/photo/2023/02/11/13/43/building-7782841__340.jpg`,
    `https\:\/\/cdn.pixabay.com/photo/2022/03/23/18/56/beach-7087722_960_720.jpg`,
    `https\:\/\/cdn.pixabay.com/photo/2022/06/27/18/56/grass-7288141__340.jpg`,
];
const title = ["title 1", "title 2", "title 3", "title 4", "title 5"];
const content = ["content 1", "content 2 ", "content 3"];
const writer = ["writer 1", "writer 2", "writer 3", "writer 4", "writer 5"];

const pool = mariadb.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWD,
    database: process.env.DB_SCHEMA,
});

app.get('/', (req, res) => {
    res.render('index.njk', {
        title: 'Welcome to my',
        message: 'Hello world!!!!'
    });
});
app.get("/login", async (req, res) => {
    res.sendFile(__dirname + '/login.html')
});

app.get("/board_add", async (req, res) => {
    const data = await createBoard();
    //-----------------------------------
    res.redirect("/board")
})
app.get("/board_update", async (req, res) => {
    const id = req.query.id;
    if (!id) {
        res.redirect("/board")
        return;
    }
    const data = await updateBoard(id);
    res.redirect(`/board/${id}`)
})

app.get("/board_delete", async (req, res) => {
    const id = req.query.id;
    if (!id) {
        res.redirect("/board")
        return;
    }
    const data = await deleteBoard(id);
    res.redirect(`/board`);
})

app.get("/board/:id?", async (req, res) => {
    console.log(req.params);
    var id = req.params.id ? +req.params.id : undefined;
    if (id) {
        let boards = await selectBoard(id);
        if (boards.length === 0) {
            res.redirect("/board")
            return;
        }
        let board = boards[0]
        res.render('board.njk', board)
    }
    else {
        let boards = await selectBoards();
        res.render("boards.njk", {
            boards: boards
        })
    }
})

app.listen(3000, () => {
    console.log('Server started on port 3000');
});

//----------------------------------------------------
//----------------------------------------------------
//type -> none | title | writer | both
async function selectBoards(_keyword, _type) {
    let conn;
    let result;
    try {
        conn = await pool.getConnection();
        const type = typeof _type === "string" ? _type : "none";
        const keyword = typeof _keyword === "string" ? _keyword : "";
        let subQuery = "";
        if (_type === "title") subQuery = `where title like '%${keyword}%';`
        else if (_type === "writer") subQuery = `where writer like '%${keyword}%';`
        else if (_type === "both")
            subQuery = `where title like '%${keyword}%' 
                        and writer like '%${keyword}%';`
        result = await conn.query(`select * from board` + subQuery);
    } catch (error) {
        console.log(error);
        result = []
    } finally {
        if (conn) conn.release();
    }
    return result;
}

// 게시글 하나의 데이터만 가져온다.
async function selectBoard(id) {
    let conn;
    let result;
    try {
        conn = await pool.getConnection();
        result = await conn.query(`select * from board where id=${id}`);
    } catch (error) {
        console.log(error);
        result = []
    } finally {
        if (conn) conn.release();
    }
    return result;
}

function getRandomElementFromArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

async function createBoard() {
    let conn;
    let result;
    try {
        conn = await pool.getConnection();
        // result = await conn.query("INSERT INTO `node_project`.`board` (`image_url`, `title`, `content`, `writer`) VALUES ('1132123', '123', '123', '123');")
        result = await conn.query(`
        insert into board 
        (\`image_url\`, \`title\`, \`content\`, \`writer\`)
        values (
            '${getRandomElementFromArray(imageUrl)}',
            '${getRandomElementFromArray(title)}',
            '${getRandomElementFromArray(content)}',
            '${getRandomElementFromArray(writer)}'
        );
        `);

    } catch (error) {
        console.log(error);
        result = []
    } finally {
        if (conn) conn.release();
    }
    return result;
}

async function updateBoard(id) {
    let conn;
    let result;
    try {
        conn = await pool.getConnection();
        result = await conn.query(`
        update board 
        set \`image_url\`='${getRandomElementFromArray(imageUrl)}'
        where id=${id};
        `);

    } catch (error) {
        console.log(error);
        result = []
    } finally {
        if (conn) conn.release();
    }
    return result;
}

async function deleteBoard(id) {
    let conn;
    let result;
    try {
        conn = await pool.getConnection();
        result = await conn.query(`
        delete from board 
        where id=${id};
        `);

    } catch (error) {
        console.log(error);
        result = []
    } finally {
        if (conn) conn.release();
    }
    return result;
}