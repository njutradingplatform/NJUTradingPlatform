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
// alert(strs);
if (Request["index"] !== undefined)
    index = Request["index"];
if (Request["username"] !== undefined)
    username = Request["username"];
if (Request["password"] !== undefined)
    password = Request["password"];
// alert(index);
// alert(username);
//获得username
//初始化index商品
var msg=search_api('p');
// function updateindexpro(msg) {
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
    // alert(spanname.length);
    // alert(h6name.length);
    for(i=0;i<spanname.length;i++)
    {
        spanname[i].innerText=msg[i].name;
    }
    for(i=0;i<h6name.length;i++)
    {
        h6name[i].innerText=msg[i+5].name
    }
    for(i=0;i<ch.length;i++)
    {
        ch[i].src=msg[i].image_path;//照片
        // alert(ch[i].src);
        chpr[i].innerText=msg[i].price;//价格
        chalink[i].href='single.html?username='+username+'&password='+password+'&index='+msg[i].id;//链接
    }
    //循环更改页面浮动改变的三张照片 链接加index获得商品id
    for(i=0;i<cha.length;i++)
    {
        cha[i].src=msg[i+3].image_path;//照片
        chapr[i].innerText=msg[i+3].price;//价格
        chalink[i+3].href='single.html?username='+username+'&password='+password+'&index='+msg[i+3].id;//链接
    }
    //循环更改下方get-now的两张照片
    for(i=0;i<chchain.length;i++)
    {
        chchain[i].src=msg[i+5].image_path;//照片
        chainpr[i].innerText=msg[i+5].price;
        chainrealpri[i].innerText=msg[i+5].price;//价格
        chainlink[i].href='single.html?username='+username+'&password='+password+'&index='+msg[i+5].id;//链接
    }
    //循环更改chain里的图

// }
function food() {
    var index = 'food';
    var url = 'product.html?username='+username+'&password='+password+'&index='+index;
    window.open(url);
}
function grocery() {
    var index = 'grocery';
    var url = 'product.html?username='+username+'&password='+password+'&index='+index;
    window.open(url);
}
function cloth() {
    var index = 'cloth';
    var url = 'product.html?username='+username+'&password='+password+'&index='+index;
    window.open(url);
}
function digital() {
    var index = 'digital';
    var url = 'product.html?username='+username+'&password='+password+'&index='+index;
    window.open(url);
}
function coupon() {
    var index = 'coupon';
    var url = 'product.html?username='+username+'&password='+password+'&index='+index;
    window.open(url);
}
function share() {
    var index = 'share';
    var url = 'product.html?username='+username+'&password='+password+'&index='+index;
    window.open(url);
}
function cosmetic() {
    var index = 'cosmetic';
    var url = 'product.html?username='+username+'&password='+password+'&index='+index;
    window.open(url);
}
function shoe() {
    var index = 'shoe';
    var url = 'product.html?username='+username+'&password='+password+'&index='+index;
    window.open(url);
}
function cart() {
    var index = 'cart';
    var url = 'cart.html?username='+username+'&password='+password+'&index='+index;
    window.open(url);
}
function contact() {
    var index = 'contact';
    var url = 'product.html?username='+username+'&password='+password+'&index='+index;
    window.open(url);
}
//链接各个商品界面传递url



function getandshowsearch(){
    var text=document.getElementById("searchtext");
    // alert(text.value);
    var index = text.value;
    var url = 'product.html?username=whw&password=219&index='+index;
    window.open(url);
}
function addshelf(msg) {
    //先得到增加的长度 以及数
    var insert=document.getElementsByClassName("addshelf");
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
var iMaxFilesize = 2097152; //2M
window.fileSelected = function() {
    var oFile = document.getElementById('imageFile').files[0];    //读取文件
    var rFilter = /^(image\/bmp|image\/gif|image\/jpeg|image\/png|image\/tiff)$/i;
    alert(oFile);
    if (!rFilter.test(oFile.type)) {
        alert("文件格式必须为图片");
        return;
    }
    if (oFile.size > iMaxFilesize) {
        alert("图片大小不能超过2M");
        return;
    }
    var vFD = new FormData(document.getElementById('uploadForm')),    //建立请求和数据
        oXHR = new XMLHttpRequest();
    oXHR.addEventListener('load', function(resUpload) {
        //成功
    }, false);
    oXHR.addEventListener('error', function() {
        //失败
    }, false);
    oXHR.addEventListener('abort', function() {
        //上传中断
    }, false);
    oXHR.open('POST', 'http://172.26.22.71:2346/image');
    oXHR.send(vFD);
};

//
function upgrade(username) {
    //根据username获得数据库数据
    // 利用得到数据库数据更新当前购物车 根据数据库增加
}
