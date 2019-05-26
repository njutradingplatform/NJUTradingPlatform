var url = location.search;
var username = "jzl"
var Request = new Object();
if (url.indexOf("?") != -1) {
    var str = url.substr(1)　//去掉?号
    strs = str.split("&");
    for (var i = 0; i < strs.length; i++) {
        Request[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
    }
}
if (Request["username"] !== undefined)
    username = Request["username"];
if (username !== "") {
    var st = document.getElementsByClassName("touxiang");
    st[0].children[0].children[0].innerText = username;
    st[0].children[0].children[0].href = "personal.html?username=" + escape(username);

    var tempUrl = "?username=" + escape(username);

    var logo = document.getElementsByClassName("logo");
    logo[0].children[0].href += tempUrl;
    var login = document.getElementsByClassName("login");
    login[0].children[0].href += tempUrl;
    var signin = document.getElementsByClassName("signin");
    signin[0].children[0].href = "#";
    var cart = document.getElementsByClassName("cart");
    cart[0].children[0].href += tempUrl;
    var acount_btn = document.getElementsByClassName("acount-btn");
    acount_btn[0].href = "#";
    var chain = document.getElementsByClassName("chain-grid menu-chain");
    chain[0].children[0].href += tempUrl;
    var view = document.getElementsByClassName("view-all all-product");
    view[0].children[0].href += tempUrl;
}
