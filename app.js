const express = require('express');

const app = express();

app.use(express.static('public'));

app.get("/", (request, response) => {
    console.log("we've received a request for the HOME PAGE")
    response.sendFile(__dirname + '/views/home.html')
});

app.get("/about", (request, response) => {
    console.log("we've received a request for the ABOUT PAGE")
    response.sendFile(__dirname + '/views/about.html')
});

app.get("/quotes", (request, response) => {
    console.log("we've received a request for the QUOTES PAGE")
    response.sendFile(__dirname + '/views/quotes.html')
});

app.get("/gallery", (request, response) => {
    console.log("we've received a request for the GALLERY PAGE")
    response.sendFile(__dirname + '/views/gallery.html')
});

app.listen(3001, () => console.log("express app listening in port 3001"));