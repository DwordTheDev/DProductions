var express = require('express');
var app =  express();
const { join } = require("path");
const { readFileSync } = require("fs");

var port = process.env.PORT

const { join } = require("path");

const { readFileSync } = require("fs");

app.use("/api", require("./api"))

app.use(express.static(__dirname));


app.get("/",function(  req,res){
    res.render("index");
})

app.listen(port,function(){
    console.log("oof")
})
