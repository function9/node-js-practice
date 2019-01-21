var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("HOMEPAGE");
})

app.get("/bye", function(req, res){
    res.send("Bye Page");
})

app.get("/woof", function(req, res){
    res.send("woof page");
})

app.get("/woof/:awoo", function(req, res){
    var name = req.params.awoo;
    res.send("Welcome to to the " + name + " page");
})

app.get("*", function(req, res){
    res.send("The code monkeys have not coded this page in yet");
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started");
});