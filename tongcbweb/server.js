var express=require("express");
var app=express();
app.use(express.static("tongcb"));
app.listen(3001);