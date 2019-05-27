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
    var ch = document.getElementsByClassName("img-responsive banner-bag")
    var cha = document.getElementsByClassName("img-responsive shoe-left")
    var chname = document.getElementsByClassName("proname")
    var chaname = document.getElementsByClassName("hproname")
    for(i=0;i<ch.length;i++)
    {
        ch[i].src='images/ba.jpg';
        chname[i].innerText='略';
    }
    //循环更改页面浮动改变的三张照片
    for(i=0;i<cha.length;i++)
    {
        cha[i].src='images/pic7.jpg';
        chaname[i].innerText='/';
    }
    //循环更改下方两张照片
    alert(ch.length)
}
function upgrade(username) {
    //根据username获得数据库数据
    // 利用得到数据库数据更新当前购物车 根据数据库增加

}
