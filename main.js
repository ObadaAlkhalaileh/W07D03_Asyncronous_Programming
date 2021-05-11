const express = require("express")
app = express()

let PORT = 3000

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200)

    res.json(`Hello Dude`)
})


app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
})