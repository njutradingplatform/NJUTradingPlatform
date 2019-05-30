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
function updateindexpro(msg) {
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
    for(i=0;i<2;i++)
    {
        spanname[i].innerText=msg[i].name;
    }
    print(msg[0].name);
/*    for(i=0;i<h6name.length;i++)
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
    spanname[0].innerText = '哈？';*/

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

function addcart(msg) {
    //先得到增加的长度 以及数
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
function Searchproduct() {
    var picturegrid=document.getElementsByClassName("img-responsive watch-right");
    var linkgrid=document.getElementsByClassName("gotosingle");
    // alert(picturegrid.length);
    /*for(i=0;i<9;i++)
    {
        picturegrid[i].src='images/wat.jpg';
    }*/
    for(i=0;i<11;i++)
    {
        var insert=document.getElementsByClassName("women-product")
        var divproductgrid=document.createElement("div");
        var divcontentbox=document.createElement("div");
        var agotosingle=document.createElement("a");
        var divleft=document.createElement("div");
        var img=document.createElement("img");
        var divmask=document.createElement("div");
        var divinfo=document.createElement("div");
        var h4=document.createElement("h4");
        var p=document.createElement("p");
        divinfo.className='info';
        divinfo.innerHTML='Quik look';
        // alert(divinfo.innerHTML);
        divmask.appendChild(divinfo);
        divmask.className='mask';
        // alert(divmask.innerHTML);
        img.className='img-responsive watch-right';
        img.src='images/ba.jpg';
        //照片
        img.alt='';
        // alert(img.innerHTML);
        divleft.appendChild(img);
        divleft.appendChild(divmask);
        // alert(divleft.innerHTML);
        agotosingle.className='gotosingle';
        agotosingle.href='single.html';
        agotosingle.appendChild(divleft);
        //链接需要添加onclick
        // alert(agotosingle.innerHTML);
        divcontentbox.appendChild(agotosingle);
        divcontentbox.className='content_box';
        h4.innerHTML='商品';
        p.innerHTML='It is a long established fact that a reader';
        divcontentbox.appendChild(h4);
        divcontentbox.appendChild(p);
        // alert(divcontentbox.innerHTML);
        //h4 商品名称 p商品价格
        divproductgrid.className=' product-grid';
        divproductgrid.appendChild(divcontentbox);
        // alert(divproductgrid.innerHTML);
        insert[0].appendChild(divproductgrid);
    }
//    页面增加
    var gotolink=document.querySelectorAll(".gotosingle")
    alert(gotolink.length);
    for(i=0;i<gotolink.length;i++)
    {
        gotolink[i].onclick=function () {
            alert(22);
            var links=this;
            alert(links);
            alert('cart.html');
            links.href='cart.html';
        }
    }
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
function upgrade(username) {
    //根据username获得数据库数据
    // 利用得到数据库数据更新当前购物车 根据数据库增加

}
