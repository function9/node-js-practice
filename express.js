var express = require("express");
var app = express();
//telling app to use files in public directory
app.use(express.static("public"));

//loads home page from ejs html file
app.get("/", function(req, res){
    res.render("home.ejs");
})

app.get("/bye", function(req, res){
    res.render("bye.ejs");
})

app.get("/woof", function(req, res){
    res.send("woof page");
})

//will load with anything following /woof/
app.get("/woof/:awoo", function(req, res){
    var name = req.params.awoo;
    res.send("Welcome to to the " + name + " page");
})
//will load if none of the other pages load
app.get("*", function(req, res){
    res.send("The code monkeys have not coded this page in yet");
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started");
});