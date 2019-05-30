// response.setHeader("Access-Control-Allow-Origin", "*");
var express =require("express");
var bodyParser = require('body-parser');
var app=express();

var sql=require("./js/connection_mysql.js");

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
    sql.Search(req.body,res.send)
    // res.send({"status":"success", "name": req.body.name, "age": req.body.age});
});

