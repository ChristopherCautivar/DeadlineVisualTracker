const express = require("express");
const app = express();

//todo: sql injection?

var mockDB = {
    "asdf":{
        "asdf":[
            {
                "event":"take out the trash",
                "start":"110119",
                "end":"110219"
            }
        ]
    }
};

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/",function(req,res){
    res.render("index");
});

app.get("/testRetrieve",function(req,res){
    //TODO: post requires additional middleware
    res.send({"events":mockDB[req.query.username][req.query.password]});
    
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is running...");
});
