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