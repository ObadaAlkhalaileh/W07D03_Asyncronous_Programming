const express = require("express")
app = express()

PORT = 5000

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200)

    res.json(`Server is Working now...`)
})


app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})