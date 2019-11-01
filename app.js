const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/",function(req,res){
    res.render("index");
});

app.post("/test",function(req,res){
    res.send({"heck yeah":"yeah bro"});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is running...");
});