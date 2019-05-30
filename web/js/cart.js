var url=location.search;
var Request = new Object();
var index='';
var username='';
var password='';
// alert(url);
if (url.indexOf("?") !== -1) {
    var str = url.substr(1);//去掉?号
    strs = str.split("&");
    for (var i = 0; i < strs.length; i++) {
        Request[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
    }
}
alert(strs);
if (Request["index"] !== undefined)
    index = Request["index"];
if (Request["username"] !== undefined)
    username = Request["username"];
if (Request["password"] !== undefined)
    password = Request["password"];
 alert(index);
 alert(username);
//获得username
//初始化addcart()
function addcart(msg) {
    //先得到增加的长度 以及数
    //初始化数据
    var insert=document.getElementsByClassName("addcarts");
    for(i=0;i<4;i++)
    {
        alert('st');
        var tr=document.createElement("tr");
        var td1=document.createElement("td");
        var td2=document.createElement("td");
        var td3=document.createElement("td");
        var td4=document.createElement("td");
        var td5=document.createElement("td");
        var td6=document.createElement("td");
        var td7=document.createElement("td");
        td1.innerHTML=i;//msg[i].id;
        td2.innerHTML="<img src='images/ba.jpg' width=\"150\" height=\"150\" alt=\"\">";
        td3.innerHTML=1;//msg[i].des;
        td4.innerHTML=2;//msg[i].price;
        td5.innerHTML=3;//msg[i].number;
        td6.innerHTML=4;//msg[i].price*msg[i].number;
        td7.innerHTML="<input type='button' class='del' value='删除'>";
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        tr.appendChild(td7);
        insert[0].appendChild(tr);
    }
    var dels=document.querySelectorAll(".del")
    alert(dels.length);
    for(i=0;i<dels.length;i++)
    {
        dels[i].onclick=function () {
            var tr = this.parentNode.parentNode;
            tr.remove();
        }
    }
//    更改msg返回数据库
}
/* function clearall(msg) {
    var total=0;
    for(i=0;i<msg.length)
    {
        total+=msg[i].number*msg[i].price;
    }
}*/
//结算