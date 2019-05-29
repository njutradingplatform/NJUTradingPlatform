/*var url = location.search;
var username = "";
var Request = new Object();
if (url.indexOf("?") !== -1) {
    var str = url.substr(1);//去掉?号
    strs = str.split("&");
    for (var i = 0; i < strs.length; i++) {
        Request[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
    }
}
if (Request["username"] !== undefined)
    username = Request["username"];
//获得username
function updateindexpro() {
    //得到json数据类型
    var ch = document.getElementsByClassName("img-responsive banner-bag");
    var cha = document.getElementsByClassName("img-responsive shoe-left");
	var chchain = document.getElementsByClassName("img-responsive chain");
    //图像循环
    var chpr = document.getElementsByClassName("propri");
    var chapr = document.getElementsByClassName("hpropri");
    var chchainpr = document.getElementsByClassName("actual");
    var chainrealpri =document.getElementsByClassName("reducedfrom");
    for(i=0;i<ch.length;i++)
    {
        ch[i].src='images/ba.jpg';
    }
    //循环更改页面浮动改变的三张照片
    for(i=0;i<cha.length;i++)
    {
        cha[i].src='images/pic7.jpg';
    }
    //循环更改下方get-now的两张照片
    for(i=0;i<chchain.length;i++)
    {
        chchain[i].src='images/ba.jpg';
    }
    //循环更改chain里的图片
    for(i=0;i<chpr.length;i++)
    {
        chpr[i].innerText='666';
    }
    //更改页面浮动的三货物的价格
    alert(chapr.length)
    for(i=0;i<chapr.length;i++)
    {
        chapr[i].innerText='666';
    }
    //更改get-now的价格
    for(i=0;i<chainrealpri.length;i++)
    {
        chchainpr[i].innerText='777';
        chainrealpri[i].innerText='666';
    }
    alert(ch.length);
	
}
function upgrade(username) {
    //根据username获得数据库数据
    // 利用得到数据库数据更新当前购物车 根据数据库增加

}
*/
var url = location.search;
var username = "";
var Request = new Object();
if (url.indexOf("?") !== -1) {
    var str = url.substr(1);//去掉?号
    strs = str.split("&");
    for (var i = 0; i < strs.length; i++) {
        Request[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
    }
}
if (Request["username"] !== undefined)
    username = Request["username"];
//获得username
function updateindexpro() {
    //得到json数据类型
    var ch = document.getElementsByClassName("img-responsive banner-bag");
    var cha = document.getElementsByClassName("img-responsive shoe-left");
    var chchain = document.getElementsByClassName("img-responsive chain");
    //图像循环
    var chpr = document.getElementsByClassName("fprice");
    var chapr = document.getElementsByClassName("hpropri");
    var chainpr = document.getElementsByClassName("actual");
    var chainrealpri =document.getElementsByClassName("reducedfrom");
    //价格循环
    var chalink = document.getElementsByClassName("now-get");
    var chainlink = document.getElementsByClassName("now-get get-cart");
    //链接循环
    var spanname = document.getElementsByClassName("spname");
    var h6name = document.getElementsByClassName("hname");
    //alert(ch.length)
    //alert(chpr.length)
    //alert(chainlink.length)
    alert(spanname.length);
    alert(h6name.length);
    for(i=0;i<spanname.length;i++)
    {
        spanname[i].innerText='??';
    }
    for(i=0;i<h6name.length;i++)
    {
        h6name[i].innerText='ha?';
    }
    for(i=0;i<ch.length;i++)
    {
        ch[i].src='images/ba.jpg';//照片
        chpr[i].innerText='666';//价格
        chalink[i].href='cart.html';//链接
    }
    //循环更改页面浮动改变的三张照片
    for(i=0;i<cha.length;i++)
    {
        cha[i].src='images/pic7.jpg';//照片
        chapr[i].innerText='666';//价格
        if(i>ch.length)
            chalink[i].href='cart.html';//链接
    }
    //循环更改下方get-now的两张照片
    for(i=0;i<chchain.length;i++)
    {
        chchain[i].src='images/ba.jpg';//照片
        chainpr[i].innerText='777';
        chainrealpri[i].innerText='666';//价格
        chainlink[i].href='single.html';//链接
    }
    //循环更改chain里的图
    spanname[0].innerText = '哈？';

}
function food() {
    var index = 'food';
    var url = 'product.html?index='+index;
    window.open(url);
}
function grocery() {
    var index = 'grocery';
    var url = 'product.html?index='+index;
    window.open(url);
}
function cloth() {
    var index = 'cloth';
    var url = 'product.html?index='+index;
    window.open(url);
}
function digital() {
    var index = 'digital';
    var url = 'product.html?index='+index;
    window.open(url);
}
function coupon() {
    var index = 'coupon';
    var url = 'product.html?index='+index;
    window.open(url);
}
function share() {
    var index = 'share';
    var url = 'product.html?index='+index;
    window.open(url);
}
function cosmetic() {
    var index = 'cosmetic';
    var url = 'product.html?index='+index;
    window.open(url);
}
function shoe() {
    var index = 'shoe';
    var url = 'product.html?index='+index;
    window.open(url);
}
function contact() {
    var index = 'contact';
    var url = 'chat.html?index='+index;
    window.open(url);
}
//链接各个商品界面传递url

function addcart() {
    //先得到增加的长度 以及数
    var insert=document.getElementsByClassName("addcarts");
    alert(insert.innerHTML);
    for(i=0;i<2;i++)
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
        td1.innerHTML='jjs';
        td2.innerHTML="<img src=\"images/ba.jpg\" width=\"150\" height=\"150\" alt=\"\">";
        td3.innerHTML=1;
        td4.innerHTML=2;
        td5.innerHTML=3;
        td6.innerHTML='dsa';
        td7.innerHTML="<input type=\"button\" class=\"delete\" value=\"删除\">";
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        tr.appendChild(td7);
        alert(tr.innerHTML);
        alert(insert.innerHTML);
        insert.innerText='?>?????';
        alert('cg');
    }


}
function upgrade(username) {
    //根据username获得数据库数据
    // 利用得到数据库数据更新当前购物车 根据数据库增加

}
