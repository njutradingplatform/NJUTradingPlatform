// http://172.26.22.71:2346/

function search_api(msg) {
    var result=[];
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://172.26.22.71:2346/search", false);
    xhr.setRequestHeader('content-type', 'application/json'); // 设置 HTTP 头，数据指定为 JSON 格式
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
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

function Find_user_api(username,password) {
    var result=[];
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://172.26.22.71:2346/find_user", false);
    xhr.setRequestHeader('content-type', 'application/json'); // 设置 HTTP 头，数据指定为 JSON 格式
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
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
        if (xhr.readyState == 4) {
            result=JSON.parse(xhr.responseText);
        }
    }
    xhr.send(JSON.stringify({"email":username}));
    // alert(result);
    return result;
}

function registration_api(username,password,first_name,last_name) {
    var result=[];
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://172.26.22.71:2346/get_user", false);
    xhr.setRequestHeader('content-type', 'application/json'); // 设置 HTTP 头，数据指定为 JSON 格式
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            result=JSON.parse(xhr.responseText).state;
        }
    }
    xhr.send(JSON.stringify({"email":username,"password":password,"first_name":first_name,"last_name":last_name}));
    // alert(result);
    return result;
}

function Reset_password_api(username,password) {
    var result=[];
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://172.26.22.71:2346/Reset_password", false);
    xhr.setRequestHeader('content-type', 'application/json'); // 设置 HTTP 头，数据指定为 JSON 格式
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            result=JSON.parse(xhr.responseText).state;
        }
    }
    xhr.send(JSON.stringify({"email":username,'password':password}));
    // alert(result);
    return result;
}

function Add_cart_api(username,pid,number) {
    var result=[];
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://172.26.22.71:2346/Add_cart", false);
    xhr.setRequestHeader('content-type', 'application/json'); // 设置 HTTP 头，数据指定为 JSON 格式
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            result=JSON.parse(xhr.responseText).state;
        }
    }
    xhr.send(JSON.stringify({"email":username,"pid":pid,'number':number}));
    // alert(result);
    return result;
}

function delete_cart_api(username,pid) {
    var result=[];
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://172.26.22.71:2346/delete_cart", false);
    xhr.setRequestHeader('content-type', 'application/json'); // 设置 HTTP 头，数据指定为 JSON 格式
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            result=JSON.parse(xhr.responseText).state;
        }
    }
    xhr.send(JSON.stringify({"email":username,"pid":pid}));
    // alert(result);
    return result;
}

function Change_cart_api(email,pid,number) {
    var result=[];
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://172.26.22.71:2346/Change_cart", false);
    xhr.setRequestHeader('content-type', 'application/json'); // 设置 HTTP 头，数据指定为 JSON 格式
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            result=JSON.parse(xhr.responseText).state;
        }
    }
    xhr.send(JSON.stringify({"email":username,"pid":pid,"number":number}));
    // alert(result);
    return result;
}