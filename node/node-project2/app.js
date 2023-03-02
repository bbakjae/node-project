const express = require('express');
const nunjucks = require('nunjucks');

const app = express();

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

var boards = [
    {
        id: 1,
        image: `https://cdn.pixabay.com/photo/2023/02/05/17/25/leaves-7770035_960_720.jpg`,
        title: "Title 1",
        content: "본문 내용입니다."
    },
    {
        id: 2,
        image: `https://cdn.pixabay.com/photo/2022/12/25/04/05/living-room-7676789_640.jpg`,
        title: "Title 2",
        content: "본문 내용입니다."
    },
    {
        id: 3,
        image: `https://cdn.pixabay.com/photo/2023/02/11/13/43/building-7782841__340.jpg`,
        title: "Title 3",
        content: "본문 내용입니다."
    },
    {
        id: 4,
        image: `https://cdn.pixabay.com/photo/2022/03/23/18/56/beach-7087722_960_720.jpg`,
        title: "Title 4",
        content: "본문 내용입니다."
    },
    {
        id: 5,
        image: `https://cdn.pixabay.com/photo/2022/06/27/18/56/grass-7288141__340.jpg`,
        title: "Title 5",
        content: "본문 내용입니다."
    },
    {
        id: 6,
        image: `https://cdn.pixabay.com/photo/2022/06/27/18/56/grass-7288141__340.jpg`,
        title: "Title 6",
        content: "본문 내용입니다."
    },
]
app.get('/', (req, res) => {
    res.render('index.njk', {
        title: 'Welcome to my',
        message: 'Hello world!!!!'
    });
});
app.get("/login", async (req, res) => {
    res.sendFile(__dirname + '/login.html')
});

app.get("/board/:id?", (req, res) => {
    if (req.query.loginId === "loginId" && req.query.passwd === "passwd") {
        console.log(req.params);
        var id = req.params.id ? +req.params.id : undefined;
        if (id) res.render('board.njk', boards.find(v => v.id === id))
        else res.render("boards.njk", {
            boards: boards
        })
    } else
        res.redirect('/')
})

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
