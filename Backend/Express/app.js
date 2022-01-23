const express=require("express");

const app=express();
const port=80;

app.use('/')


app.get("/",(req,res)=>{
  res.send("this is my first express app with  Harry hello");
});

app.get("/home",(req,res)=>{
  res.status(400).send("this is my first express app with  Harry hello");
});

app.get("/about",(req,res)=>{
  res.status(200).send("this is my first express app with  Harry hello");
});
app.get("/service",(req,res)=>{
  res.send("this is my first express app with  Harry hello");
});

app.get("/contact",(req,res)=>{
  res.send("this is my first express app with  Harry hello");
});

app.listen(port,()=>{
  console.log(`This application started successfully on port ${port}`);
})