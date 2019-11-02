const express = require("express");
const app = express();

//todo: sql injection?

var mockDB = {
    "chris":{
        "asdf":[
            {
                "event":"take out the trash",
                "start":"110119",
                "end":"110219",
                "color":"red"
            }
        ]
    }
};

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/",function(req,res){
    res.render("index");
});

app.get("/test",function(req,res){
    //TODO: post requires additional middleware
    console.log(req.query.password)
    res.send({"events":mockDB[req.query.username][req.query.password]});
    
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is running...");
});
