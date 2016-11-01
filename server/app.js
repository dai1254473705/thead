//导入 express 模块
const express = require("express");
//实例化 express
const app = express();
//系统模块 路径模块
const path = require("path");
//引入 swig 模块
const Swig = require('swig');
//导入 request 模块 http 请求模块插件
var request = require('request');
Swig.setDefaults({
	cache:false //不缓存文件
});
//声明 get 请求，路由是 /
app.get("/",function(req,res){
	//res.send();//输出json或者 字符串
	res.render("index");
});

//index
app.get("/index",function(req,res){
	//res.send();//输出json或者 字符串
	res.render("index");
});
//movie
app.get("/movie",function(req,res){
	//res.send();//输出json或者 字符串
	res.render("movie");
});
//login
app.get("/register",function(req,res){
	//res.send();//输出json或者 字符串
	res.render("register");
});
// res : response 服务器发送给浏览器的对象
app.route('/api/audio').get(function(req, res){
	//接收js使用ajax发送的数据
	var query = req.query;
//	console.log(query.type);
	var url = query.url;
	delete query.url;

	request.post({
		url: url,
		formData:req.query
	},function(error,response,data){
		res.send(data);
	});
	
});
// 设置文件后缀的解释器
app.engine('html', Swig.renderFile);
//设置 页面的后缀
app.set('view engine', 'html');
//设置 页面的 跟目录
app.set("views",path.join(__dirname,"../views"));


// __dirname 系统变量，当前文件路径 （两个下划线）

//把一个目录当做一个静态文件服务的根目录
//访问的路由是 配置的的路由地址开头的都能访问
//拼接目录地址
app.use("/static",express.static(path.join(__dirname,"../static")));

//监听本机端口号，运行服务
const server = app.listen(80,function(){
	let host = server.address().address;
  	let port = server.address().port;
  	
	console.log('http://127.0.0.1:80');
});
