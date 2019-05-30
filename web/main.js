// response.setHeader("Access-Control-Allow-Origin", "*");
var express =require("express");
var bodyParser = require('body-parser');
var app=express();

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
    // if (req.body.data) {
    //     //能正确解析 json 格式的post参数
    //     res.send({"status": "success", "name": req.body.data.name, "age": req.body.data.age});
    // } else {
    //     //不能正确解析json 格式的post参数
    //     var body = '', jsonStr;
    //     req.on('data', function (chunk) {
    //         body += chunk; //读取参数流转化为字符串
    //     });
    //     req.on('end', function () {
    //         //读取参数流结束后将转化的body字符串解析成 JSON 格式
    //         try {
    //             jsonStr = JSON.parse(body);
    //         } catch (err) {
    //             jsonStr = null;
    //         }
    //         jsonStr ? res.send({"status":"success", "name": jsonStr.data.name, "age": jsonStr.data.age}) : res.send({"status":"error"});
    //     });
    // }
    if (!req.body) return res.sendStatus(400);
    console.log('filename: ' + req.body.name);
    res.send({"status":"success", "name": req.body.name, "age": req.body.age});
});

