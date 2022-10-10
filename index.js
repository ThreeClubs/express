"use-strict";

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send(`<p style='background:blue'>Hello, World!</p>`);
});

app.get("/api/userList", (req, res) => {
  const userList = [
    { name: "john", age: 27 },
    { name: "Mary", age: 22 },
    { name: "Ethan", age: 17 },
    { name: "Joe", age: 53 },
    { name: "Amelia", age: 87 },
    { name: "Adam", age: 34 },
  ];
  res.json(userList);
});

const urlVar = new URL(
  "https://www.trademe.co.nz/a/marketplace/computers/laptops/search?search_string:%20laptop"
);
// console.log(urlVar);
// console.log(urlVar.origin);
// console.log(urlVar.searchParams.get("search_string"));
// console.log(urlVar.hostname);
// console.log(urlVar.pathname);
// console.log(urlVar.search);
// console.log(urlVar.href);

app.get('/api/user/:userID', (req, res) => {
    console.log("The params are... ", req.params.userID)
    res.sendStatus(200)
})

app.get("/api/book/:bookID", (req, res) => {
    const bookString = req.params.bookID.split(/(?=[A-Z])/).join(" ");
  console.log(`The name of the book I have chosen is: ${bookString}`);
   ;
  res
    .status(200)
    .send(
      `The name of the book I have chosen is: ${bookString}`
    );
});



app.get("/api/greet", (req, res) => {
  res.send(
    "<h1>Top 10 Favourite Web Technologies</h1><ol><li>HTML</li><li>CSS</li><li>JavaScript</li><li>React</li><li>BootStrap</li><li>MUI</li><li>REDUX</li><li>node.js</li><li>express.api</li><li>SQL</li></ol>"
  );
});

const PORT = 4000;
app.listen(PORT, function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log(`Listening at http://localHost:${PORT}`);
  }
});
