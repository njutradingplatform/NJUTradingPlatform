// http://172.26.22.71:2346/

function search_api(msg) {
    alert(123);
    var result=[];
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://172.26.22.71:2346/search", false);
    xhr.setRequestHeader('content-type', 'application/json'); // 设置 HTTP 头，数据指定为 JSON 格式
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            result=JSON.parse(xhr.responseText);
            // alert(1);
            // if(xhr.getResponseHeader('content-type')==='application/json'){
            //     result = JSON.parse(xhr.responseText); // 必须从 responseText 读文本数据
            //     alert(22);
            //     // console.log(result);
            // } else{
            //     result=xhr.responseText;
            //     // console.log(xhr.responseText);
            //     alert(33);
            // }
        }
    }
    xhr.send(JSON.stringify({"text":msg}));
    // alert(result);
    return result;
}

//-1 用户名不存在
//0 密码错误
//1 正确
function Find_user_api(username,password) {
    var result=[];
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://172.26.22.71:2346/find_user", false);
    xhr.setRequestHeader('content-type', 'application/json'); // 设置 HTTP 头，数据指定为 JSON 格式
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            result=JSON.parse(xhr.responseText).state;
        }
    }
    xhr.send(JSON.stringify({"email":username,"password":password}));
    // alert(result);
    return result;
}

function Get_user_api(username) {
    var result=[];
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://172.26.22.71:2346/get_user", false);
    xhr.setRequestHeader('content-type', 'application/json'); // 设置 HTTP 头，数据指定为 JSON 格式
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            result=JSON.parse(xhr.responseText);
        }
    }
    xhr.send(JSON.stringify({"email":username}));
    // alert(result);
    return result;
}

//-2 用户已存在
//2 注册成功
//-3 失败
function registration_api(username,password,first_name,last_name) {
    var result=[];
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://172.26.22.71:2346/get_user", false);
    xhr.setRequestHeader('content-type', 'application/json'); // 设置 HTTP 头，数据指定为 JSON 格式
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            result=JSON.parse(xhr.responseText).state;
        }
    }
    xhr.send(JSON.stringify({"email":username,"password":password,"first_name":first_name,"last_name":last_name}));
    // alert(result);
    return result;
}

//3 成功
//-4 失败
function Reset_password_api(username,password) {
    var result=[];
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://172.26.22.71:2346/Reset_password", false);
    xhr.setRequestHeader('content-type', 'application/json'); // 设置 HTTP 头，数据指定为 JSON 格式
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            result=JSON.parse(xhr.responseText).state;
        }
    }
    xhr.send(JSON.stringify({"email":username,'password':password}));
    // alert(result);
    return result;
}

//5成功
//-5超出库存数量
//-6用户名不存在
//-7插入失败
function Add_cart_api(username,pid,number) {
    var result=[];
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://172.26.22.71:2346/Add_cart", false);
    xhr.setRequestHeader('content-type', 'application/json'); // 设置 HTTP 头，数据指定为 JSON 格式
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            result=JSON.parse(xhr.responseText).state;
        }
    }
    xhr.send(JSON.stringify({"email":username,"pid":pid,'number':number}));
    // alert(result);
    return result;
}

//8 成功
//-8 失败
function delete_cart_api(username,pid) {
    var result=[];
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://172.26.22.71:2346/delete_cart", false);
    xhr.setRequestHeader('content-type', 'application/json'); // 设置 HTTP 头，数据指定为 JSON 格式
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            result=JSON.parse(xhr.responseText).state;
        }
    }
    xhr.send(JSON.stringify({"email":username,"pid":pid}));
    // alert(result);
    return result;
}

//9 成功
//-9 失败
function Change_cart_api(email,pid,number) {
    var result=[];
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://172.26.22.71:2346/Change_cart", false);
    xhr.setRequestHeader('content-type', 'application/json'); // 设置 HTTP 头，数据指定为 JSON 格式
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            result=JSON.parse(xhr.responseText).state;
        }
    }
    xhr.send(JSON.stringify({"email":username,"pid":pid,"number":number}));
    // alert(result);
    return result;
}

function ai_api(msg) {
    var result=[];
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://114.212.101.15:8125/encode", false);
    xhr.setRequestHeader('content-type', 'application/json'); // 设置 HTTP 头，数据指定为 JSON 格式
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            result=JSON.parse(xhr.responseText).result[0][0];
        }
    }
    xhr.send(JSON.stringify({
        "id": 123,
        "texts": [msg],
        "is_tokenized": false
    }));
    // alert(result);
    return result;
}

function Default_products_api() {
    var result=[];
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://172.26.22.71:2346/Default_products", false);
    xhr.setRequestHeader('content-type', 'application/json'); // 设置 HTTP 头，数据指定为 JSON 格式
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            result=JSON.parse(xhr.responseText);
        }
    }
    xhr.send(JSON.stringify({"email":'aaa'}));
    // alert(result);
    return result;
}

function Payment_api(email,pid,number) {
    var result=[];
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://172.26.22.71:2346/Payment", false);
    xhr.setRequestHeader('content-type', 'application/json'); // 设置 HTTP 头，数据指定为 JSON 格式
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            result=JSON.parse(xhr.responseText).state;
        }
    }
    xhr.send(JSON.stringify({"pid":pid,"number":number}));
    // alert(result);
    return result;
}

function Recommendation(email,pid,number) {
    var result=[];
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://172.26.22.71:2346/Recommendation", false);
    xhr.setRequestHeader('content-type', 'application/json'); // 设置 HTTP 头，数据指定为 JSON 格式
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            result=JSON.parse(xhr.responseText);
        }
    }
    xhr.send(JSON.stringify({"email":"username"}));
    // alert(result);
    return result;
}