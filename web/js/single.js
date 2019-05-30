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

var imgin=document.getElementsByClassName("etalage_source_image");
var img=document.getElementsByClassName("etalage_thumb_image");
var n=document.getElementsByClassName("h1name");
var p=document.getElementsByClassName("price");
alert(img.length);
alert(imgin.length);
for(i=0;i<imgin.length;i++)
{
    imgin[i].src="images/ba.jpg";
}
n[0].innerText="jdosa";
p[0].innerText=200;
function singleaddtocart() {
    //已得到pid username 和 number
    Add_cart_api(username,index,1);
    alert("添加成功");
}

