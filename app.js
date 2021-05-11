const express = require("express")
app = express()

let PORT = 3000

app.use(express.json());

const fs = require("fs");
const axios = require("axios");


const readFile = () => {
    let content;
    fs.readFile("./data.txt", (err, data) => {
        if (err) throw err;
        content = data.toString();
    });
    return content
};


app.get("/", (req, res) => {
    res.status(200)

    res.json(`Hello Dude`)
})


app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
})