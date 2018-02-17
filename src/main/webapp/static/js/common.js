/**
 * 判断字符串是否为空
 * @param str 字符串
 * @returns {boolean} 为 null,undefined 或 ''时返回true
 */
function isStrEmpty(str) {
    return str == null || str === undefined || str === '';
}

/**
 * 判断字符串是否为url
 * @param url 字符串
 * @returns {boolean} 是返回true
 */
function isUrl(url) {
    var regex = "((http|ftp|https)://)(([a-zA-Z0-9\\._-]+\\.[a-zA-Z]{2,6})|([0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}" +
        "\\.[0-9]{1,3}))(:[0-9]{1,4})*(/[a-zA-Z0-9\\&%_\\./-~-]*)?";
    var re = url.match(regex);
    return re != null;
}

/**
 * 判断字符串是否为邮箱
 * @param email 字符串
 * @returns {boolean} 是返回true
 */
function isEmail(email) {
    var emailRegex = "\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*";

    var re = email.match(emailRegex);
    return re != null;
}

/**
 * 判断字符串是否为电话号码
 * @param phone 字符串
 * @returns {boolean} 是返回true
 */
function isPhone(phone) {
    var phoneRegex = ["^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0-9]))\\d{8}$", "^(0\\d{2}-\\d{8}(-\\d{1,4})?)|(0\\d{3}-\\d{7,8}(-\\d{1,4})?)$"];

    var re = phone.match(phoneRegex[0]);
    var re1 = phone.match(phoneRegex[1]);
    return re != null || re1 != null;
}

/**
 * 判断字符串是否为密码（6-12 位字母和数字组成）
 * @param str 字符串
 * @returns {boolean} 是返回true
 */
function isPassword(str) {
    var pwdRegex = "^(?:(?=.*[A-z])(?=.*[0-9])).{6,12}$";

    var re = str.match(pwdRegex);
    return re != null;
}

/**
 * 将日期格式为 2017-02-13 的格式
 * @param date long（java）型日期
 * @returns {string} 字符串
 */
function dateFormat(date) {
    var d = new Date(date);
    return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
}

/**
 * 滚动到网页顶部
 */
function scrollToTop() {
    $("html,body").animate({scrollTop: 0}, 500);
}

/**
 * 获取数组中指定元素下标
 * @param array 数组
 * @param item 元素
 * @returns {*} 下标，不存在返回-1
 */
function getArrayIndex(array, item) {
    for (var index in array) {
        if (array[index] === item)
            return index;
    }

    return -1;
}

/**
 * @param count 数字，倒数起始值，大于0
 * @param cir 回调间隔（毫秒）
 * @param callback 回调函数，如果需要结束倒计数（默认倒数到0时结束），返回true，否则返回false
 */
function countDown(count, cir, callback) {
    if (count <= 0) return;

    var timer;

    var down = function () {
        if (callback(count)) {
            clearInterval(timer);
        } else {
            count--;
        }
    };

    timer = setInterval(down, 1000);
}

/**
 * 在指定id处显示错误信息（有闪动效果）
 * @param msg 错误信息
 * @param id id
 */
function error(msg, id) {
    var dom = $('#' + id);
    dom.html(msg);
    dom.css('background-color', 'red');
    dom.css('color', 'white');

    var s = function () {
        dom.css('background-color', 'transparent');
        dom.css('color', 'red');
    };
    setTimeout(s, 200);
}

/**
 * 改变按钮可用状态
 * @param enable true为可用
 * @param id 按钮id
 * @param content 按钮内容
 */
function disableButton(enable, id, content) {
    var button = $('#' + id);
    button.html(content);

    if (!enable && !button.hasClass('button-disable')) {
        button.addClass('button-disable');
    } else if (enable && button.hasClass('button-disable')) {
        button.removeClass('button-disable');
    }
}