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
// alert(index);
// alert(username);
var idnumber=parseInt(index);
var msg=find_product_api(idnumber);
// alert(msg.length);
// alert(msg[0].image_path);
var imgin=document.getElementById("imgss");
var img=document.getElementsByClassName("etalage_thumb_image");
var n=document.getElementsByClassName("h1name");
var p=document.getElementsByClassName("price");
// alert(img.length);
// alert(imgin.length);
// alert(imgin.src);
imgin.src=msg[0].image_path;
// alert(msg[0].image_path);
// alert(imgin.src);
n[0].innerText=msg[0].name;
p[0].innerText=msg[0].price;
function singleaddtocart() {
    //已得到pid username 和 number
    Add_cart_api(username,index,1);
    alert("添加成功");
}
function cart() {
    var index = 'cart';
    var url = 'cart.html?username='+username+'&password='+password+'&index='+index;
    window.open(url);
}
function getandshowsearch(){
    var text=document.getElementById("searchtext");
    // alert(text.value);
    var index = text.value;
    var url = 'product.html?username='+username+'&password='+password+'&index='+index;
    window.open(url);
}
