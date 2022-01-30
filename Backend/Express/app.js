const express = require("express");
const fs = require("fs");
const app = express();
const port = 80;
const path = require("path");
app.use(express.urlencoded());

app.use("/static", express.static("static")); //For serving static files

//PUG Specific STUFF
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views")); //Set the view directory

//ENDPoints
app.get("/", (req, res) => {
  const con = "this is the best content";
  const params = { title: "pubG is the best game", content: con };
  res.status(200).render("index.pug", params);
});

app.post("/", (req, res) => {
  name = req.body.name;
  age = req.body.age;
  gender = req.body.gender;
  address = req.body.address;
  more = req.body.more;

  let outputToWrite = `the name of the client is  ${name}, ${age} year old`;
  fs.writeFileSync("output.txt", outputToWrite);

  const params = { message: "Your form has been submitted successfully" };
  res.status(200).render("index.pug", params);
});

//Our Pug demo end point

app.listen(port, () => {
  console.log(`This application started successfully on port ${port}`);
});
