var https=require('http');
var options = {
    host: '114.212.101.15',
    port: 8125,
    path: '/encode',
    method: 'POST',
    headers:{
        'Content-Type':'application/json'
    }
};
function ai_help(msg,func) {
    function send_msg() {
        var content=JSON.stringify({
            "id": 123,
            "texts": [msg],
            "is_tokenized": false
        });
        var req = https.request(options, function (res) {
            res.setEncoding('utf8');
            var _data='';
            res.on('data', function(chunk){
                _data += chunk;
            });
            res.on('end', function(){
                func(JSON.parse(_data)["result"][0][0]);
            });
        });
        req.on('error', function (e) {
            console.log('problem with request: ' + e.message);
        });
        req.write(content);
        req.end();
    }
    send_msg(msg);
    // console.log('problem with request1: ' + result);
    // setTimeout(function () {
    //     console.log('problem with request2: ' + result);
    // },1000)
    // console.log('problem with request3: ' + result);
}

// async function ai(msg) {
//     let res=await ai_help(msg);
//     console.log("\n--->>\nresult:",res);
//     //balabala0
// }

function print(msg) {
    console.log("\n--->>\nresult:",msg);
}

ai_help('你好',print);