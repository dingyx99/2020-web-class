function multipleTable() {
    for (var i = 1; i <= 9; i++) {
        var chart = "";
        for (var j = 1; j <= i; j++) {
            chart += (`${j}*${i}=${i*j}\t`);
        }
        document.getElementById("answer1").innerHTML += chart;
        document.getElementById("answer1").innerHTML += "</br>";
    }
}

function isPrime() {
    input = document.getElementById("ex2-input").value;
    var flag = 0;
    if (input == 1) {
        document.getElementById("answer2").innerHTML = "1既不是质数也不是合数！";
    } else {
        for (var i = 2; i <= Math.floor(Math.sqrt(input)); i++) {
            if (input % i == 0) {
                flag = 1;
                break;
            }
        }
        if (flag) {
            document.getElementById("answer2").innerHTML = "这个数不是质数！";
        } else {
            document.getElementById("answer2").innerHTML = "这个数是质数！";
        }
    }
}

function isAnagram() {
    str1 = document.getElementById("ex3-str1").value.split('');
    str2 = document.getElementById("ex3-str2").value.split('');
    var flag = 0;
    if (str1.length != str2.length) {
        flag = 1;
    } else {
        var len = str1.length;
        for (var i = 0; i < len; i++) {
            if (str1.indexOf(str2[i]) == -1) {
                flag = 1;
                break;
            } else {
                str1.splice(str1.indexOf(str2[i]), 1)
            }
        }
    }
    if (flag) {
        document.getElementById("answer3").innerHTML = "这两个字符串不是互为变位词！";
    } else {
        document.getElementById("answer3").innerHTML = "这两个字符串互为变位词！";
    }
}

function isPalindrome() {
    str = document.getElementById("ex4-input").value;
    var flag = 0;
    var len = str.length;
    for (var i = 0; i < len; i++) {
        if (str[i] != str[len - i - 1]) {
            flag = 1;
            break;
        }
    }
    if (flag) {
        document.getElementById("answer4").innerHTML = "这不是一个回文字符串！";
    } else {
        document.getElementById("answer4").innerHTML = "这是一个回文字符串！";
    }
}

function getDate() {
    var today = new Date()
    var firstOfSem = new Date(2020, 1, 17);
    var day = today.getDay();
    var dayChar = "";
    switch (day) {
        case 0:
            dayChar = "日";
            break;
        case 1:
            dayChar = "一";
            break;
        case 2:
            dayChar = "二";
            break;
        case 3:
            dayChar = "三";
            break;
        case 4:
            dayChar = "四";
            break;
        case 5:
            dayChar = "五";
            break;
        case 6:
            dayChar = "六";
            break;
        default:
            break;
    }
    var week = parseInt(Math.abs(today.getTime() - firstOfSem.getTime()) / 1000 / 60 / 60 / 24 / 7);
    document.getElementById("answer6").innerHTML = ("<p>今天是开学第" + week + "周，星期" + dayChar + "。</p>")
}

function greaterMethod(a, b) {
    return b - a;
}

function arrayAttrib() {
    arr = document.getElementById("ex7-input").value.split(',');
    arr = arr.sort(greaterMethod);
    document.getElementById("answer7").innerHTML = ("<p>数组的最大值为" + arr[0] + "，最小值为" + arr[arr.length - 1] + "。</p>" + "<p>排序后的数组如下：</p>" + arr)
}

function testLeapYear() {
    year = document.getElementById("ex8-input").value;
    var flag = 0;
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            flag = 1;
        }
    } else {
        if (year % 4 == 0) {
            flag = 1;
        }
    }
    if (flag) {
        document.getElementById("answer8").innerHTML = (year + "是闰年！");
        alert(year + "是闰年！");
    } else {
        document.getElementById("answer8").innerHTML = (year + "是平年！");
        alert(year + "是平年！");
    }
}

function checkInput(){
    if(document.getElementById("ex9-input").value == ""){
        alert("你的输入为空，请检查后继续！");
        return false;
    }
    return true;
}