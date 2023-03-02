const express = require("express");

const app = express();
const ports = 3000;
app.use(express.json());

app.get("/login", async (req, res) => {
    res.sendFile(__dirname + '/login.html')
});
app.get("/board", (req, res) => {
    res.sendFile(__dirname + "/boards.html")
})
app.get("/board-detail", (req, res) => {
    console.log(req.query, 11);
    var id = req.query.id
    res.sendFile(__dirname + `/board/${id}.html`)
})
app.listen(ports, () => {
    console.log("server listening on port 3000");
});
