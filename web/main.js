var express =require("express");
var app=express();
app.use(express.static(".")).listen(80);

app.post('/search', function (req, res) {
    if (req.body.data) {
        //能正确解析 json 格式的post参数
        res.send({"status": "success", "name": req.body.data.name, "age": req.body.data.age});
    } else {
        //不能正确解析json 格式的post参数
        var body = '', jsonStr;
        req.on('data', function (chunk) {
            body += chunk; //读取参数流转化为字符串
        });
        req.on('end', function () {
            //读取参数流结束后将转化的body字符串解析成 JSON 格式
            try {
                jsonStr = JSON.parse(body);
            } catch (err) {
                jsonStr = null;
            }
            jsonStr ? res.send({"status":"success", "name": jsonStr.data.name, "age": jsonStr.data.age}) : res.send({"status":"error"});
        });
    }
});

