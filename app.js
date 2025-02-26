const express = require('express');

const app = express();

app.use(express.static('public'));

app.get("/", (request, response) => {
    response.sendFile(__dirname + '/views/home.html')
});

app.get("/about", (request, response) => {
    response.sendFile(__dirname + '/views/about.html')
});

app.get("/quotes", (request, response) => {
    response.sendFile(__dirname + '/views/quotes.html')
});

app.get("/gallery", (request, response) => {
    response.sendFile(__dirname + '/views/gallery.html')
});

app.listen(3001, () => console.log("express app listening in port 3001"));