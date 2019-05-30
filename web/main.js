// response.setHeader("Access-Control-Allow-Origin", "*");
var express =require("express");
var bodyParser = require('body-parser');
var app=express();


var new_element=document.createElement("script");
new_element.setAttribute("type","text/javascript");
new_element.setAttribute("src","js/connection_mysql.js");// 在这里引入了a.js
document.body.appendChild(new_element);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var allowCors = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials','true');
    next();
};
app.use(allowCors);//使用跨域中间件

app.use(express.static(".")).listen(80);

app.post('/search', function (req, res) {
    if (!req.body) return res.sendStatus(400);
    console.log(req.body)
    Search(req.body,res.send)
    // res.send({"status":"success", "name": req.body.name, "age": req.body.age});
});

