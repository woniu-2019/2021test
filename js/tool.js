//封装随机数
function getRandNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
//封装随机颜色
function getRandColor() {
    var color1 = getRandNum(0, 255);
    var color2 = getRandNum(0, 255);
    var color3 = getRandNum(0, 255);
    return "rgb(" + color1 + "," + color2 + "," + color3 + ")"
}

//阻止冒泡事件
function pBubble() {
    if (event && event.stopPropagation) {
        event.stopPropagation()//非ie

    } else {
        event.cancelBubble = true//ie系列 ie678
    }
}

/* 添加事件 
obj - 某个对象
EType - 某个事件
fun - 触发的函数*/
function addEvent(obj, EType, fun) {
    if (obj.addEventListener) {
        obj.addEventListener(EType, fun)

    } else if (obj.attachEvent) {
        obj.attachEvent('on' + EType, fun)
    } else {
        //onclick
        obj['on' + EType] = fun
    }

}

/* 移除事件 */
function removeEvent(obj, EType, fun) {
    if (obj.removeEventListener) {
        obj.removeEventListener(EType, fun)

    } else if (obj.detachEvent) {
        obj.detachEvent('on' + EType, fun)
    } else {
        //onclick
        obj['on' + EType] = false;
        // obj['on'+EType]=null;
    }
}

/* 禁止默认事件 */
function pDefaultfun(event) {
    if (event.preventDefault) {
        event.preventDefault()
    } else {
        event.returnValue = false;
    }
}

//求差集arr1-arr2
function arrayMinus(arr1, arr2) {
    var result = [];
    arr1.forEach(function (x) {
        if (arr2.indexOf(x) === -1) {
            result.push(x);
        } else {
            return;
        }
    })
    return result;
}

/* 
ajaxGetSync get同步
ajaxGetAsync get异步
ajaxPostSync post同步
ajaxPostAsync post异步


*/
// ajaxGetSync get同步

function ajaxGetSync(urls, parms, sucFun, errFun) {
    if (window.XMLHttpRequest) {//普通浏览器
        var http_request = new XMLHttpRequest();
    } else if (window.ActiveXObject) {//ie浏览器
        var http_request = new ActiveXObject('Microsoft.XMLHTTP');
    }
    http_request.open('GET', urls + '?'+parms, false)
    http_request.send();
    if (http_request.status == 200 && http_request.readyState == 4) {
        sucFun(http_request)
    } else {
        errFun()
    }
}

// ajaxGetAsync get异步

function ajaxGetAsync(urls, parms, sucFun, errFun) {
    if (window.XMLHttpRequest) {//普通浏览器
        var http_request = new XMLHttpRequest();
    } else if (window.ActiveXObject) {//ie浏览器
        var http_request = new ActiveXObject('Microsoft.XMLHTTP');
    }
    http_request.open('GET', urls + '?'+parms, true)
    http_request.send();
    http_request.onreadystatechange = function () {
        if (http_request.readyState == 4) {
            if (http_request.status == 200) {
                sucFun(http_request)
            } else {
                errFun()
            }
        }

    }

}

// ajaxPostSync post同步

function ajaxPostSync(urls, parms, sucFun, errFun) {
    if (window.XMLHttpRequest) {//普通浏览器
        var http_request = new XMLHttpRequest();
    } else if (window.ActiveXObject) {//ie浏览器
        var http_request = new ActiveXObject('Microsoft.XMLHTTP');
    }
    http_request.open('POST', urls, false)
    http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http_request.send( parms);
    if (http_request.status == 200 && http_request.readyState == 4) {
        sucFun(http_request)
    } else {
        errFun()
    }
}

// ajaxPostAsync post异步

function ajaxPostAsync(urls, parms, sucFun, errFun) {
    if (window.XMLHttpRequest) {//普通浏览器
        var http_request = new XMLHttpRequest();
    } else if (window.ActiveXObject) {//ie浏览器
        var http_request = new ActiveXObject('Microsoft.XMLHTTP');
    }
    http_request.open('POST', urls, true)
    http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http_request.send( parms);
    http_request.onreadystatechange = function () {
        if (http_request.readyState == 4) {
            if (http_request.status == 200) {
                sucFun(http_request)
            } else {
                errFun()
            }
        }

    }

}
