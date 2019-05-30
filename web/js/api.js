// http://172.26.22.71:2346/

function search_api(msg) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://172.26.22.71:2346/search", true);
    xhr.setRequestHeader('content-type', 'application/json'); // 设置 HTTP 头，数据指定为 JSON 格式
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            if(xhr.getResponseHeader('content-type')==='application/json'){
                var result = JSON.parse(xhr.responseText); // 必须从 responseText 读文本数据
                /* ... */
            } else{
                console.log(xhr.responseText);
            }
        }
    }
    xhr.send(msg);
}