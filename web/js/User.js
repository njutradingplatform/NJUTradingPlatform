var url = location.search;

var username, passwd;
var loginState = false;
var Request = {};
if (url.indexOf("?") !== -1) {
    var str = url.substr(1)　//去掉?号
    strs = str.split("&");
    for (var i = 0; i < strs.length; i++) {
        Request[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
    }
}
IfLogin();

function IfLogin() {
    if (Request["username"] !== undefined && Request["passwd"] !== undefined) {
        window.username = Request["username"];
        window.passwd = Request["passwd"];
        var state = Find_user_api(username, passwd);
        if (state === 1) {
            loginState = true;
            Init(username, passwd);
        }
    }
}

function Init(username, passwd) {
    if (typeof (username) !== "undefined" && typeof (passwd) !== "undefined") {
        if (username !== "" && passwd !== "") {
            //alert("time");
            var st = document.getElementsByClassName("touxiang");
            st[0].children[0].children[0].innerText = username;
            st[0].children[0].children[0].href = "personal.html?username=" + escape(username) + "&passwd=" + escape(passwd);
            var tempUrl = "?username=" + escape(username) + "&passwd=" + escape(passwd);
            var logo = document.getElementsByClassName("logo");
            logo[0].style.visibility="hidden";
            //logo[0].children[0].href += tempUrl;
            var login = document.getElementsByClassName("login");
            login[0].style.visibility="hidden";
            //login[0].children[0].href = "#"
            var signin = document.getElementsByClassName("signin");
            //signin[0].children[0].href = "#";
            signin[0].style.visibility="hidden";
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
                for (var i = 0; i < 3; ++i) {
                    kid[0].children[i].children[0].href += tempUrl;
                }
                kid[1].children[0].children[0].href += tempUrl;
            } catch (e) {
            }
            try {
                var email_name = document.getElementById("email_name")
                email_name.value = username;
            } catch (e) {
            }
        }
    }

}

function ChangePass() {
    if (loginState) {
        var newpass1 = document.forms["change_pass"]["newpasswd1"].value;
        var newpass2 = document.forms["change_pass"]["newpasswd2"].value;
        var myreg = /^(\w){6,20}$/;
        if (newpass1 !== newpass2) {
            alert("请确保两次输入的密码一致");
            var url="index.html?username=" + escape(username) + "&passwd=" + escape(window.passwd);
            window.open(url);
            window.close();
        } else if (!myreg.test(newpass1)) {
            alert("只能输入6-20个字母、数字、下划线");
            var url="index.html?username=" + escape(username) + "&passwd=" + escape(window.passwd);
            window.open(url);
            window.close();
        } else {
            var state = Reset_password_api(username, newpass1);
            if (state === 3) {
                window.passwd = newpass1;
                alert("修改成功");
                var url="index.html?username=" + escape(username) + "&passwd=" + escape(window.passwd);
                window.open(url);
                window.close();
            } else {
                alert("修改失败，请重新输入");
                var url="index.html?username=" + escape(username) + "&passwd=" + escape(window.passwd);
                window.open(url);
                window.close();
            }
        }
    } else {
        alert("请先登录");
    }
}

function Register() {
    //alert("in");
    //alert(url);
    var firstname = "abc";
    var lastname = "abc";
    var email = document.getElementById("email").value;
    var passwd1 = document.getElementById("passwd1").value;
    var passwd2 = document.getElementById("passwd2").value;
    var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    var passreg = /^(\w){6,20}$/;

    if (!myreg.test(email)) {
        alert("请输入正确的邮箱地址");
    } else if (passwd1 !== passwd2) {
        alert("请确保两次输入的密码一致");
    } else if (!passreg.test(passwd1)) {
        alert("只能输入6-20个字母、数字、下划线");
    } else {
        //alert("123");
        var state = registration_api(email, passwd1, firstname, lastname);
        //alert(state);
        switch (state) {
            case -2:
                alert("用户已存在");
                break;
            case -3:
                alert("网络忙，注册失败");
                break;
            case 2:
                alert("注册成功");
                window.username = email;
                window.passwd = passwd1;
                var url="index.html?username=" + escape(username) + "&passwd=" + escape(passwd);
                window.open(url);
                window.close();
                break;
            default:
                alert("网络忙，注册失败");
                break;
        }
    }
}

function Login_button() {
    var email = document.getElementById("email").value;
    var passwd = document.getElementById("passwd").value;
    var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    var passreg = /^(\w){6,20}$/;

    if (!myreg.test(email)) {
        alert("请输入正确的邮箱地址");
    } else if (!passreg.test(passwd)) {
        alert("只能输入6-20个字母、数字、下划线");
    } else {
        var state = Find_user_api(email, passwd);
        switch (state) {
            case -1:
                alert("用户名不正确");
                break;
            case 0:
                alert("密码错误");
                break;
            case 1:
                loginState = true;
                window.username = email;
                window.passwd = passwd;
                alert("登陆成功");
                var url="index.html?username=" + escape(username) + "&passwd=" + escape(passwd);
                window.open(url);
                window.close();
                //window.location.href=url;
                break;
        }
    }
}