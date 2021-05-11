const express = require("express")
app = express()

let PORT = 3000

app.use(express.json());

//Q1
const fs = require("fs");
const axios = require("axios");

//Q2
const readFile = () => {
    let content;
    fs.readFile("./data.txt", (err, data) => {
        if (err) throw err;
        content = data.toString();
        console.log(content)
    });
    return content
};
readFile()

//Q3
const writeFile = () => {
    fs.writeFile("text.txt", " A new file has been created", (err) => {
        if (err) throw err;
        console.log("The file has been created");
    });
};
writeFile()

app.get("/", (req, res) => {
    res.status(200)

    res.json(`Hello Dude`)
})


app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
})