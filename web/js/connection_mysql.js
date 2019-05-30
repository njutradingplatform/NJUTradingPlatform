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

// 登录函数
function Find_user(email,password,func){

    // email 为数据库查询结果
    var sql='SELECT * FROM users WHERE user_email=\''+email+'\'';

    console.log(sql);
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
        func(state);
    }
    function query(callback){
        connection.query(sql,function(err,rows){
           var judge=1; //判断变量是否存在用户名
            if(rows.length===0) {
                judge = 0;
            }
            console.log(judge);
            callback(rows,judge);
        })
    }
    query(callback);

}

// 获取用户信息函数
function Get_users(email,func){
    var sql='SELECT * FROM users WHERE user_email='+email;

    function query(){
        connection.query(sql,function(err,rows){
            if(err) {
                func(null);
            }
            func(rows);
        })
    }
    query();
}

//用户注册函数
function registration(email,password,first_name,last_name,func){

    // email 为数据库查询结果
    var sql='SELECT * FROM users WHERE user_email=\''+email+'\'';

    //插入数据操作
    var sql1='INSERT INTO users (user_email,password,first_name,last_name) VALUES (\''+email+'\', \''+password+',\' '+first_name+'\',\' '+last_name+'\')';

    function callback(judge){
        var state=2; //表示查询结果的状态变量 1为成功
        if(judge===1){
            state=-2;
            // email 已经存在
            func(state);
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
            if(err) {
                judge = 0;
            }
            callback(judge)
        })
    }
    query(callback);

    function insert_query(state){
        connection.query(sql1,function(err,rows){
            if(err) {
                state=-3;
            }
            func(state);
        })
    }

}




// 修改密码函数
function Reset_password(email,password,func){
    var sql1='UPDATE users SET password='+password+' WHERE user_email='+email;

    function query(callback){
        connection.query(sql1,function(err,rows){
            var state=3;
            if(err) {
                state=-4;
            }
            func(state);
        })
    }
    query(callback);
}

// 添加购物车函数
function Add_cart(email,pid,number,func){
    // 查询商品表中商品的数量
    var sql='SELECT * FROM products WHERE id='+pid;

    //插入数据操作
    var sql1='INSERT INTO shopping_cart (pid,number,user_email) VALUES ('+pid+', '+number+', '+email+')';

    function callback(rows,judge){
        var state=-1; //表示查询结果的状态变量 -1为添加数量超过已有数量
        if(rows[0].number<number){
            func(state);  //表明购物车中商品数量超过商品数量
        }else{
            insert_query(state);
        }
    }
    function query(callback){
        connection.query(sql,function(err,rows){
            var judge=1; //判断变量是否存在用户名
            if(err) {
                judge = 0;
                return;
            }
            callback(rows,judge);
        })
    }
    query(callback);

    function insert_query(state){
        connection.query(sql1,function(err,rows){
            if(err) {
                state=-1;
            }else
            {
                state=1;    //1表示添加成功
            }
            func(state);
        })
    }

}

// 删除购物车中的这条记录
function delete_cart(email,pid,func){
    var sql='SELECT  FROM shopping_cart WHERE pid = '+pid+' AND user_email = '+email;

    function query(){
        connection.query(sql,function(err,rows){
            var judge=1; //判断变量是否存在用户名
            if(err) {
                judge = 0;
            }
            func(judge);
        })
    }
    query();
}

//修改购物车这个商品的数量
function Change_cart(email,pid,number,func){
    var sql='UPDATE shopping_cart SET number = '+number+' WHERE user_email = '+email+'AND pid = '+pid;

    function query(){
        connection.query(sql,function(err,rows){
            var judge=1; //判断变量是否存在用户名
            if(err) {
                judge = 0;
            }
            func(judge);
        })
    }
    query();
}

// 搜索函数
function Search(key,func){

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

        func(res);
    }

    function query(callback){
        connection.query(sql,function(err,rows){
            if(err) {
                func(null);
            }
            callback(rows)
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

function print(msg) {
    console.log("\n--->>\nresult:",msg);
}

function Default_products(func){
    var sql='SELECT * FROM products';

    function query(){
        connection.query(sql,function(err,rows){
            if(err) {
                func(null);
            }
            func(rows);
        })
    }
    query();

}

function Payment(pid,number,func){
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
                        func(null);
                    }
                    //func(rows);
                })
            }
            query1();


        }

    }

    function query(callback){
        connection.query(sql,function(err,rows){
            if(err) {
                func(null);
            }
            callback(rows);
        })
    }
    query(callback);

}

function Recommendation(func){

    var sql='SELECT * FROM products';

    function callback(rows){
        var res;
        res=rows;


        res=res.sort(function(a,b){
            return a.sales - b.sales
        });

        func(res);
    }

    function query(){
        connection.query(sql,function(err,rows){
            if(err) {
                func(null);
            }
            callback(rows);
        })
    }
    query();

}

function find_product(pid,func){
    var sql='SELECT * FROM products WHERE id='+pid;

    function query(){
        connection.query(sql,function(err,rows){
            if(err) {
                func(null);
            }
            func(rows);
        })
    }
    query();

}

function initialization_shopping_cart(pid,email,func){
    var sql='SELECT s.id, s.pid, s.number, s.user_email, p.price, p.cid, p.number stock, p.seller, p.description,\n' +
        'p.image_path, p.name\n' +
        'FROM shopping_cart s\n' +
        'INNER JOIN products p\n' +
        'ON s.pid =p.id \n' +
        'WHERE s.pid='+pid +'AND user_email= \''+email+'\'';

    function query(){
        connection.query(sql,function(err,rows){
            if(err) {
                func(null);
            }
            func(rows);
        })
    }
    query();

}

Find_user('000001','1111',print);


connection.end();

//mysql -udatabase -h 172.26.22.71 --port 2347 -p  进入到远程服务器数据库的操作
// 密码 shujuku

