var fs=require("fs");
var express=require("express");
var app=express();
var tongCbData=[];
fs.readFile("data/1.json",function(err,data){
	if(err){
		console.log("读取数据失败！");
	}else{
		tongCbData.push(data);
		app.listen(3000);
		console.log("111");
	}
});

//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
app.get("/data/pagecount/:count",function(req,res,next){
	var count=req.params.count-1;
	res.send(tongCbData[count]);
});

