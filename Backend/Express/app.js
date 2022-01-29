const express = require("express");
const app = express();
const port = 80;
const path = require("path");


app.use("/static", express.static("static"));   //For serving static files

//PUG Specific STUFF
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));  //Set the view directory


//ENDPoints
app.get('./',(req,res)=>{
  res.status(200).render('index.pug',)
})



//Our Pug demo end point








app.listen(port, () => {
  console.log(`This application started successfully on port ${port}`);
});
