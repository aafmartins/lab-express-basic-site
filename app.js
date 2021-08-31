const express = require("express");

// We create our own server named app
// Express server will be handling requests and responses
const app = express();

app.use(express.static(__dirname + "/public"));

app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
});

app.get("/photogallery", (req, res) => {
  res.sendFile(__dirname + "/views/photogallery.html");
});

app.get("/works", (req, res) => {
  res.sendFile(__dirname + "/views/works.html");
});

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`);
});
