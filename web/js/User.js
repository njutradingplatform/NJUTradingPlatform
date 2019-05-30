function Login() {
    var url = location.search;
    var username,cpasswd;
    var Request = {};
    if (url.indexOf("?") !== -1) {
        var str = url.substr(1)　//去掉?号
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            Request[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    if (Request["username"] !== undefined && Request["passwd"] !== undefined){
        username = Request["username"];
        passwd = Request["passwd"];

    }
}

function Init(state,username,passwd) {

    if (ifLogin) {
        var st = document.getElementsByClassName("touxiang");
        st[0].children[0].children[0].innerText = username;
        st[0].children[0].children[0].href = "personal.html?username=" + escape(username)+"&passwd="+escape(passwd);
        var tempUrl = "?username=" + escape(username)+"&passwd="+escape(passwd);
        var logo = document.getElementsByClassName("logo");
        logo[0].children[0].href += tempUrl;
        var login = document.getElementsByClassName("login");
        login[0].children[0].href = "#"
        var signin = document.getElementsByClassName("signin");
        signin[0].children[0].href = "#";
        var cart = document.getElementsByClassName("cart");
        cart[0].children[0].href += tempUrl;
        var view = document.getElementsByClassName("view-all all-product");
        view[0].children[0].href += tempUrl;
        try {
            var acount_btn = document.getElementsByClassName("acount-btn");
            acount_btn[0].href = "#";
        } catch (e) {
        }
        try {
            var chain = document.getElementsByClassName("chain-grid menu-chain");
            chain[0].children[0].href += tempUrl;
        } catch (e) {
        }
        try {
            var xiaoxi = document.getElementsByClassName("xiaoxi");
            xiaoxi[0].children[0].href += tempUrl;
        } catch (e) {
        }
        try {
            var cart_link = document.getElementsByClassName("cart-link");
            cart_link[0].children[0].href += tempUrl;
        } catch (e) {
        }
        try {
            var h3 = document.getElementsByTagName("h3");
            h3[0].children[0].href += tempUrl;
        } catch (e) {
        }
        try {
            var kid = document.getElementsByClassName("kid-menu");
            for(var i=0;i<3;++i){
                kid[0].children[i].children[0].href+=tempUrl;
            }
            kid[1].children[0].children[0].href+=tempUrl;
        } catch (e) {
        }

    }
}

function GetUserInfo() {

}

function IfLogin() {

}