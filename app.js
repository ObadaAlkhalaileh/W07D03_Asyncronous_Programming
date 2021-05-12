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
//readFile()

//Q3
const writeFile = () => {
    fs.writeFile("text.txt", " A new file has been created", (err) => {
        if (err) throw err;
        console.log("The file has been created");
    });
};
//writeFile()

//Q4
const getPost = (id) => {
    axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)

    .then((response) => {
        console.log(response.data);
    })

    .catch((err) => {
        throw err;
    });
};
//getPost(1);
//getPost(50);

//Q5
const getPostAsync = async(id) => {

    try {
        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        console.log(response.data);
    } catch (err) {
        console.log("ERROR IS:", err);
    }
};
//getPostAsync(1)

//PRAACTICE 
//1

const appendToFile = (data) => {

    fs.appendFile('./data.txt', data, (err) => {
        if (err) throw err;
        console.log('The "data to append" was appended to file!');
    });
};
//appendToFile("heeelllloooooo")

//2
const copyFile = (fileName) => {
    fs.copyFile(fileName, `copy_of_${fileName}`, (err) => {
        if (err) return console.log('ERROR=====', err);
        console.log('data.txt was copied to copy_of_data.txt');
    });
};
//copyFile('data.txt')

//3
// the API Expects JSON data to be sent and that's why `JSON.stringify` is used
const post = JSON.stringify({
    title: "JavaScript Basics",
    body: "This post contains information about javaScript ",
    // the id of the user who is going to create the post
    userId: 1,
});

const createPost = (post) => {
    // will be promise based according to the documentation
    //well... seems like we dont need to use async methods because it's a post method.
    axios({
        method: 'post',
        url: 'https://jsonplaceholder.typicode.com/posts',
        data: post
    });
    //since its a post method so i can directly console log the data because its already on my pc (no need to 
    //wait for response from server)
    return console.log(JSON.parse(post))
};

//createPost(post);



app.get("/", (req, res) => {
    res.status(200)

    res.json(`Hello Dude`)
})




app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
})