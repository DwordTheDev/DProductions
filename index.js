var express = require('express');
var app =  express();
const { join } = require("path");
const { readFileSync } = require("fs");

var port = process.env.PORT

const { join } = require("path");

const { readFileSync } = require("fs");

app.use("/", require("index"))

app.use(express.static(__dirname));




app.listen(port,function(){
    console.log("oof")
})
