// 连接服务器
var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : '172.26.22.71',
    port     : '2347',
    user     : 'database',
    password : 'shujuku',
    database : 'tradingdb'
});
connection.connect();


function print(msg) {
    console.log("\n--->>\nresult:",msg);
}


// Find_user('000001','1111',print);
// Search('a',updateindexpro);
// connection.end();
//mysql -udatabase -h 172.26.22.71 --port 2347 -p  进入到远程服务器数据库的操作
// 密码 shujuku

var path = require("path");
var fs = require("fs");

var formidable = require('formidable');

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

app.post('/find_user', function (req, ress) {
    // 登录函数
    function Find_user(email,password){

        // email 为数据库查询结果
        var sql='SELECT * FROM users WHERE user_email=\''+email+'\'';

        // console.log(sql);
        function callback(rows,judge){
            var result;
            result=rows;
            var state; //表示查询结果的状态变量
            if (judge===0){
                state=-1;
                // email password 都不正确
            }else if(judge===1){

                if(result[0].password===password){
                    state=1;
                    // email password 都正确
                }
                else{
                    state=0;
                    //email 正确 password 不正确
                }
            }
            ress.send({"state":state});
        }
        function query(callback){
            connection.query(sql,function(err,rows){
                var judge=1; //判断变量是否存在用户名
                if(rows.length===0) {
                    judge = 0;
                }
                // console.log(judge);
                callback(rows,judge);
            })
        }
        query(callback);

    }

    if (!req.body) return ress.sendStatus(400);
    // console.log(req.body.text);
    Find_user(req.body.email,req.body.password);
});

app.post('/get_user', function (req, ress) {
    // 获取用户信息函数
    function Get_users(email){
        var sql='SELECT * FROM users WHERE user_email='+'\''email+'\'';
        function query(){
            connection.query(sql,function(err,rows){
                if(rows.length===0) {
                    ress.send([]);
                }
                ress.send(rows);
            })
        }
        query();
    }
    
    if (!req.body) return ress.sendStatus(400);
    // console.log(req.body.text);
    Get_users(req.body.email);
});

app.post('/registration', function (req, ress) {
    //用户注册函数
    function registration(email,password,first_name,last_name){

        // email 为数据库查询结果
        var sql='SELECT * FROM users WHERE user_email=\''+email+'\'';

        //插入数据操作
        var sql1='INSERT INTO users (user_email,password,first_name,last_name) VALUES (\''+email+'\', \''+password+',\' '+first_name+'\',\' '+last_name+'\')';

        function callback(judge){
            var state=2; //表示查询结果的状态变量 1为成功
            if(judge===1){
                state=-2;
                // email 已经存在
                ress.send({'state':state});
            }
            //判断操作
            else
            {
                insert_query(state);
            }
        }
        function query(callback){
            connection.query(sql,function(err,rows){
                var judge=1; //判断变量是否存在用户名
                if(rows.length===0) {
                    judge = 0;
                }
                callback(judge)
            })
        }
        query(callback);

        function insert_query(state){
            connection.query(sql1,function(err,rows){
                if(rows.length===0) {
                    state=-3;
                }
                ress.send({'state':state});
            })
        }

    }

    if (!req.body) return ress.sendStatus(400);
    // console.log(req.body.text);
    registration(req.body.email,req.body.password,req.body.first_name,req.body.last_name);
});

app.post('/Reset_password', function (req, ress) {
    // 修改密码函数
    function Reset_password(email,password){
        var sql1='UPDATE users SET password='+password+' WHERE user_email='+email;

        function query(callback){
            connection.query(sql1,function(err,rows){
                var state=3;
                if(rows.length===0) {
                    state=-4;
                }
                ress.send({'state':state});
            })
        }
        query(callback);
    }

    if (!req.body) return ress.sendStatus(400);
    // console.log(req.body.text);
    Reset_password(req.body.email,req.body.password);
});

app.post('/Add_cart', function (req, ress) {
    // 添加购物车函数
    function Add_cart(email,pid,number){
        // 查询商品表中商品的数量
        var sql='SELECT * FROM products WHERE id='+pid;

        //插入数据操作
        var sql1='INSERT INTO shopping_cart (pid,number,user_email) VALUES ('+pid+', '+number+', '+email+')';

        function callback(rows,judge){
            var state=-5; //表示查询结果的状态变量 -1为添加数量超过已有数量
            if(rows[0].number<number){
                ress.send({'state':state});  //表明购物车中商品数量超过商品数量
            }else{
                insert_query(state);
            }
        }
        function query(callback){
            connection.query(sql,function(err,rows){
                var judge=1; //判断变量是否存在用户名
                if(rows.length===0) {
                    judge = 0;
                    ress.send({'state':-6});
                }
                callback(rows,judge);
            })
        }
        query(callback);

        function insert_query(state){
            connection.query(sql1,function(err,rows){
                if(rows.length===0) {
                    state=-7;
                }else
                {
                    state=5;    //1表示添加成功
                }
                ress.send({'state':state});
            })
        }

    }

    if (!req.body) return ress.sendStatus(400);
    // console.log(req.body.text);
    Add_cart(req.body.email,req.body.pid,req.body.number);
});

app.post('/delete_cart', function (req, ress) {
    // 删除购物车中的这条记录
    function delete_cart(email,pid){
        var sql='SELECT  FROM shopping_cart WHERE pid = '+pid+' AND user_email = '+email;

        function query(){
            connection.query(sql,function(err,rows){
                var judge=8; //判断变量是否存在用户名
                if(rows.length===0) {
                    judge = -8;
                }
                ress.send({'state':judge});
            })
        }
        query();
    }

    if (!req.body) return ress.sendStatus(400);
    // console.log(req.body.text);
    delete_cart(req.body.email,req.body.pid);
});

app.post('/Change_cart', function (req, ress) {
    //修改购物车这个商品的数量
    function Change_cart(email,pid,number){
        var sql='UPDATE shopping_cart SET number = '+number+' WHERE user_email = '+email+'AND pid = '+pid;

        function query(){
            connection.query(sql,function(err,rows){
                var judge=9; //判断变量是否存在用户名
                if(rows.length===0) {
                    judge = -9;
                }
                ress.send({'state':judge});
            })
        }
        query();
    }

    if (!req.body) return ress.sendStatus(400);
    // console.log(req.body.text);
    Change_cart(req.body.email,req.body.pid,req.body.number);
});

app.post('/search', function (req, ress) {
    // 搜索函数
    function Search(key){

        var sql='SELECT * FROM products';
        // 逻辑放在callback中避免异步执行问题
        function callback(rows){
            var res;
            res=rows;
            res=res.map(function(item) {
                item.lcs = lcs(key,item.name);
                return item;
            })
            res=res.filter(function(item) {
                if (item.lcs > 0) {
                    return item;
                }

            });

            res=res.sort(function(a,b){
                return a.lcs - b.lcs
            });
            console.log(res);
            ress.send(res);
        }

        function query(callback){
            connection.query(sql,function(err,rows){
                if(rows.length===0) {
                    console.log(rows);
                    ress.send([]);
                }else if(key=='')
                {
                    console.log(rows);
                    ress.send(rows);
                }else
                {
                    callback(rows);
                }

            })
        }

        query(callback);

        // 求最长公共子序列的长度
        function lcs(str1, str2) {
            var len1 = str1.length;
            var len2 = str2.length;
            var dp = []; // 首先定义一个一维数组
            for (var i = 0; i <= len1; i++) {
                dp[i] = []; // 将一维数组升级为二维数组
                for (var j = 0; j <= len2; j++) {
                    if (i === 0 || j === 0) {
                        dp[i][j] = 0;
                        continue;
                    }
                    if (str1[i - 1] === str2[j - 1]) { // dp 的维度为 (len1+1)*(len2+1),str 的维度为 (len1)*(len2)
                        dp[i][j] = dp[i - 1][j - 1] + 1;
                    } else {
                        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]); // 否则取当前位置上或左的最大数
                    }
                }
            }
            return dp[len1][len2]; // 返回二维数组最后一个值
        }


    }

    if (!req.body) return ress.sendStatus(400);
    // console.log(req.body.text);
    Search(req.body.text);
});

app.post('/Default_products', function (req, ress) {
    function Default_products(){
        var sql='SELECT * FROM products';

        function query(){
            connection.query(sql,function(err,rows){
                if(err) {
                    ress.send([]);
                }
                ress.send(rows);
            })
        }
        query();

    }

    if (!req.body) return ress.sendStatus(400);
    // console.log(req.body.text);
    Default_products();
});

app.post('/Payment', function (req, ress) {
    //修改购物车这个商品的数量
    function Payment(pid,number){
        var sql='SELECT * FROM products WHERE id='+pid;

        // 逻辑放在callback中避免异步执行问题
        function callback(rows){
            var res;
            res=rows;

            if(res[0].number>=number){
                var sql1='UPDATE products SET number='+res[0].number-number+''+', sales='+res[0].sales+number+' WHERE id='+pid;

                function query1(){
                    connection.query(sql1,function(err,rows){
                        if(err) {
                            ress.send({"state":-1});
                        }
                        ress.send({"state":1});
                    })
                }
                query1();


            }

        }

        function query(callback){
            connection.query(sql,function(err,rows){
                if(err) {
                    ress.send({"state":-1});
                }
                callback(rows);
            })
        }
        query(callback);

    }

    if (!req.body) return ress.sendStatus(400);
    // console.log(req.body.text);
    Payment(req.body.pid,req.body.number);
});

app.post('/Recommendation', function (req, ress) {
    function Recommendation(){
        var sql='SELECT * FROM products';

        function callback(rows){
            var res;
            res=rows;

            res=res.sort(function(a,b){
                return a.sales - b.sales
            });

            ress.send(res);
        }

        function query(){
            connection.query(sql,function(err,rows){
                if(err) {
                    ress.send([]);
                }
                callback(rows);
            })
        }
        query();

    }

    if (!req.body) return ress.sendStatus(400);
    // console.log(req.body.text);
    Recommendation();
});

app.post("/image",function (req,res) {
    var form = new formidable.IncomingForm();
    form.encoding = 'utf-8';
    form.uploadDir = path.join(__dirname + "/../page/upload");
    form.keepExtensions = true;//保留后缀
    form.maxFieldsSize = 2 * 1024 * 1024;
    //处理图片
    form.parse(req, function (err, fields, files){
        console.log(files.the_file);
        var filename = files.the_file.name
        var nameArray = filename.split('.');
        var type = nameArray[nameArray.length - 1];
        var name = '';
        for (var i = 0; i < nameArray.length - 1; i++) {
            name = name + nameArray[i];
        }
        var date = new Date();
        var time = '_' + date.getFullYear() + "_" + date.getMonth() + "_" + date.getDay() + "_" + date.getHours() + "_" + date.getMinutes();
        var avatarName = name + time + '.' + type;
        var newPath = form.uploadDir + "/" + avatarName;
        fs.renameSync(files.the_file.path, newPath);  //重命名
        res.send({data:"/upload/"+avatarName})
    })
});