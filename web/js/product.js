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
//获得index进行search
// function Searchproduct(msg) {
    //alert(msg.length);
    var msg=search_api(''+index);
    // alert(msg.length);
    var picturegrid=document.getElementsByClassName("img-responsive watch-right");
    var linkgrid=document.getElementsByClassName("gotosingle");
    // alert(picturegrid.length);
    /*for(i=0;i<9;i++)
    {
        picturegrid[i].src='images/wat.jpg';
    }*/
    for(i=0;i<12;i++)
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
        img.src=msg[i].image_path;
        //照片
        img.alt='';
        // alert(img.innerHTML);
        divleft.appendChild(img);
        divleft.appendChild(divmask);
        // alert(divleft.innerHTML);
        agotosingle.className='gotosingle';
        agotosingle.href='single.html?username='+username+'&password='+password+'&index='+msg[i].id;
        //直接添加对应的single.html+id然后查看
        agotosingle.appendChild(divleft);
        //链接需要添加onclick
        // alert(agotosingle.innerHTML);
        divcontentbox.appendChild(agotosingle);
        divcontentbox.className='content_box';
        h4.innerHTML=msg[i].name;
        p.innerHTML=msg[i].price;
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
//     var arr = new Array();
//     arr[0]=arr[1]=arr[2]=arr[3]=arr[4]=arr[5]=arr[6]=arr[7]=arr[8]='cart.html';
//     arr[9]=arr[10]='single.html'
//     var gotolink=document.querySelectorAll(".gotosingle")
//     alert(gotolink.length);
    /*for(i=0;i<gotolink.length;i++)
    {
        gotolink[i].onclick=function () {
            alert(22);
            var links=this;
            alert(links);
            alert('cart.html');
            links.href=arr[i];
        }
    }*/
// }
function cart() {
    var index = 'cart';
    var url = 'cart.html?username='+username+'&password='+password+'&index='+index;
    window.open(url);
}