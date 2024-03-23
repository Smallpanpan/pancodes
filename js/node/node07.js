/** 
 * 使用严格模式
 */

'use strict';
//1、简单斐波那契数
function feibonacci(index) {
    if (index < 0) {
        return false
    } else if (index < 2) {
        return index
    }
    let n = 0;
    let m = 1;
    let temp;
    for (let i = 2; i <= index; i++) {
        temp = n + m;
        n = m;
        m = temp;
    }
    return temp;
}


//2、 使用递归方法写出斐波那契数
//需要重复计算
function feibonacci(n) {
    if (n < 0) {
        return
    }
    if (n == 0 || n == 1) { //结束条件
        return n
    }
    return feibonacci(n - 1) + feibonacci(n - 2);
}



// 3、使用递归方法写出斐波那契数，并缓存（再次执行的时候，不会再次运行）
var fibonacci = function (n) {
    let memo = [0, 1];
    let fib = function (n) {
        if (memo[n] == undefined) {
            memo[n] = fib(n - 2) + fib(n - 1)
        }
        return memo[n]
    }
    return fib;
}()


// var feibonacci = function(i){
//     let memo = [0,1];
//     let fei = function(i){
//         if(memo[i] == undefined){
//             memo[i] = fei(i-1)+fei(i-2);
//         }
//         return memo[i]
//     }
//     return fei(i)
// }

// 获取数组（树）的最大深度

// 获取URL字段的键值对
function getUrlParam(sUrl, sKey) {
    let arrs = [];
    let obj = {};
    let arr = sUrl.split("?")[1].split("#")[0].split("&");
    console.log("arr", arr);
    if (sKey) { //存在key,返回数组或者或者空字符串
        for (let i in arr) {
            let [key, value] = arr[i].split("=");
            if (key == sKey) {
                arrs.push(value);
            }
        }
        if (arrs.length < 2) {
            arrs = arrs.toString();
        }
        return arrs
    } else {
        for (let i in arr) {
            let [key, value] = arr[i].split("=");
            if (obj[key]) {
                obj[key] = [...obj[key], value]
            } else {
                obj[key] = value;
            }
        }
        return obj;
    }
}

// 通用获取URL键值对
/**
 *
 *
 * @param {*} url 输入的标准get请求参数链接：问号？ 后带参数,&为分隔参数 =分别是参数键值 #为结尾 
 * http://110.40.132.151:7001/admin/server/list?page=1&limit=20&serverName=1&serverSite=2&typeId=0
 * @return {*} 返回参数对象 没有的话则为空{}
 */
function getUrl(url) {
    let obj = {};
    let arr = url.split("?")[1].split("#")[0].split("&");
    for (let i in arr) {
        let [key, value] = arr[i].split("=");
        if (obj[key]) {
            obj[key] = [...obj[key], value]
        } else {
            obj[key] = value;
        }
    }
    return obj;
}



// console.log(getUrl('http://110.40.132.151:7001/admin/server/list?page=1&limit=20&serverName=1&serverSite=2&typeId=0'))

// 获取数组深度：
/**
 *输入参数为字符串型的n维数组，数组的每一项值为数组 或 int型数字。请实现一个函数，可以获取列表嵌套列表的最大深度为多少。
 输入：[[1], [2,3,4], [5,[2,3]], [7], [0,[1,2,3,4],3,5], [1,3], [3,2,4]] 输出3 因为数组有三层
 *思路：广度遍历，判断当前参数是否为 数组如果是数组则累加，将当前参数第一层循环是数组加入新数组，直到最后一层数组为空
 * @param {*} arr  
 */
function getDeep(arr) {
    let newArr = arr;
    let deep = 0;
    while (newArr.length) {
        let tempArr = [];
        for (let i in newArr) {
            if (Array.isArray(newArr[i])) { //如果当前是数组，将原始添加入新数组
                tempArr = [...tempArr, ...newArr[i]];
            }
        }
        newArr = tempArr;
        deep++
    }
    return deep;
}

// 广度遍历数组/对象
// while(newArr.length){
//     let tempArr = [];
//     for(let i in newArr){
//         if(!Array.isArray(newArr[i])){
//             console.log(newArr[i])
//         }else{
//             tempArr = [...tempArr,...newArr];
//         }
//         newArr = tempArr;
//     }
// }
// 广度遍历对象
function getObjcet(obj) {
    let newObj = obj;
    while (Object.keys(newObj).length) {
        let tempObj = [];
        for (let i in newObj) {
            if (newObj[i].constructor === Object) {
                tempObj = {
                    ...tempObj,
                    ...newObj[i]
                };
            } else {
                console.log(tempObj[i])
            }
        }
        newObj = tempObj;
    }
}
// 深度遍历对象
function getObjcetDeep(obj) {
    let newObj = obj;
    if (Object.keys(newObj).length) {
        return false 
    }
    for (let i in newObj) {
        if (newObj[i].constructor === Object) {
            getObjcetDeep(newObj[i])
        } else {
            console.log(tempObj[i])
        }
    }
}

function getArrayDepth(ry) {
    let levels = 1;
    let prev_length = 1;
    let curr_length = ry.length;
    while (curr_length > prev_length) { //不断扁平化数组，当扁平化到当前长度跟前一个长度相等 不在循环
        ry = ry.flat();
        prev_length = curr_length
        curr_length = ry.length;
        levels++
    }
    return levels;
}

/**
 *修改this指向
 *函数f
 * @param {*} f
 * @param {*} oTarget
 */
function bindThis(f, oTarget) {
    return function () {
        return f.apply(oTarget, arguments);
    }
}

// 其他方式：
// function bindThis(f, oTarget) {
//  return function() {
//      return f.apply(oTarget, arguments)
//  }
// }


// function bindThis(f, oTarget) {
//  return f.bind(oTarget)
// }


// function bindThis(f, oTarget) {
//  return function() {
//      return f.call(oTarget, ...arguments)
//  }
// }



Function.prototype.myApplys = function (context) {
    var context = context || window;
    context.fn() = this;
    let args = [...arguments].slice(1);
    let result = context.fn(...args);
    return result
}



// 数组去重 使用set属性
function uniq(arr) {
    return [...new Set(arr)]
}
// 普通循环
function uniq1(arr) {
    let result = [];
    let flag = true;
    for (let i in arr) {
        if (result.indexOf(arr[i]) == -1) { //未定义、NaN 和 {} 出现的情况
            if (arr[i] != arr[i] && (typeof arr[i] === "number")) { //NaN 排除
                if (flag) {
                    result.push(arr[i]);
                    flag = !flag;
                }
            } else {
                result.push(arr[i]);
            }
        }
    }
}


// 格式化时间 输出当前时间为格式： 2014.09.05 13:14:20
function formaDate(date, format) {
    // 补零
    let addZero = (num) => {
        if (num < 10) {
            num = '0' + num;
        }
        return num;
    }
}

// 获取两个数组交集
// 

function getSame(arrA, arrB) {
    if (arrA.length < 1 || arrB < 1) {
        return []
    }
    let result = arrA.filter(item => {
        return arrB.indexOf(item);
    })
    return result
}

// 格式化时间输出
/**
 *思路：通过Date自带的方法 获取每个时间位置的数值，然后替换
 *求出所有位置对应的数值，考察：所有Date对象方法，obj选择替换
 *对于 2014.09.05 13:14:20
yyyy: 年份，2014
yy: 年份，14
MM: 月份，补满两位，09
M: 月份, 9
dd: 日期，补满两位，05
d: 日期, 5
HH: 24制小时，补满两位，13
H: 24制小时，13
hh: 12制小时，补满两位，01
h: 12制小时，1
mm: 分钟，补满两位，14
m: 分钟，14
ss: 秒，补满两位，20
s: 秒，20
w: 星期，为 ['日', '一', '二', '三', '四', '五', '六'] 中的某一个，本 demo 结果为 五
 * @param {*} date  Date对象
 * @param {*} str   输出字符串的规则
 */
function formatDate(date, format) {
    let addZero = function (data) {
        if (data < 10) {
            return '0' + data
        }
        return data
    }
    let obj = {
        'yyyy': date.getFullYear(),
        'yy': date.getFullYear() % 100,
        'MM': addZero(date.getMonth() + 1),
        'M': date.getMonth() + 1,
        'dd': addZero(date.getDate()),
        'd': date.getDate(),
        'HH': addZero(date.getHours()),
        'H': date.getHours(),
        'hh': addZero(date.getHours() % 12),
        'h': date.getHours() % 12,
        'mm': addZero(date.getMinutes()),
        'm': date.getMinutes(),
        'ss': addZero(date.getSeconds()),
        's': date.getSeconds(),
        'w': function () {
            arr = ['日', '一', '二', '三', '四', '五', '六']
            return arr[date.getDay()]
        }()
    }
    for (let i in obj) {
        format = format.replace(i, obj[i])
    }
    return format
}

/**
 *获取字符串长度
 *求字符串 Unicode编码长度： str.charCodeAt()  /str.charCodeAt(i)  获取Unicode码
 *如果编码大于255（汉字）则长度为2
 * @param {*} s    字符串
 * @param {*} bUnicode255For1
 */
function strLength(s, bUnicode255For1) {
    if (bUnicode255For1) {
        return s.length
    }
    let totle = 0;
    for (let i in s) {
        if (s[i].charCodeAt() > 255) {
            totle += 2
        } else {
            totle++
        }
    }
    return totle
}

// console.log('111',strLength('牛客, hello world', false)); 
/** 
 * css 中 @import 和link区别
从属关系： css语法 HTML语法
优先级：link优先级比@import高（权重）
加载顺序：link 引入时 同时加载  @import在页面加载完才会在家CSS（后加载）、
兼容：@import 是css2.1存在可能存在兼容问题，link因为是HTML属性，不存在兼容问题

commonJS 模块：require 引入 运行时加载，会加载整个模块
import ：编译加载，在编译的时候已经完成加载，部分加载，效率比common高。
*/

// 大数相加/精度丢失的小数相加  进行模拟运行、小数的话增大倍数，运算然后再缩小倍数
// 例如:
let a = '123456789';
let b = '11111111111111111111111111';
// 模拟运行
function add(a, b) {
    let temp = 0,
        res = "";
    a = a.split('');
    b = b.split('');
    while (a.length || b.length || temp) {
        temp += ~~(a.pop()) + ~~(b.pop());
        res = (temp % 10) + res;
        temp = temp > 9 ? 1 : 0;
    }
    return res;
}
a = "1a12ab123abc1234abcd12345abcde123456abcdef"
// 获取字符串中的数字，以数组形式返回
function getNumber(str) {
    return str.match(/\d+/g);
}


// 获取最长数字子字段 str.match test replace
function getLong(str) {
    let arr = str.match(/\d+/g);
    let max = 0,
        n = 0;
    for (let i in arr) {
        if (arr[i].length > max) {
            max = arr[i].length;
            n = i;
        }
    }
    return arr[n];
}

// console.log(getLong(a));

// 获取时区
// 输入 '110000000000000000000000000000000000000000000000'
// 输出 ["00:00~01:00"]
// 思路： 判断字符串下标 1-48 对应时间位。循环时间位，开始时间为 i/2 除不尽parseInt(i/2) +30   i/2>0 时钟计算：7
function getTime(str) {

}

// 去除字符串两端空格
function clearSpan1(str) {
    return str.trim();
}
// 使用正则表示 s表示字符
function clearSpan2(str) {
    return str.replace(/\s+/g, '');
}
// 统计字符串中每个字符出现的频率 
// 思路：遍历字符串，将字符设置为key 如果存在key,则+1
function count(str) {
    let obj = {};
    for (let i in str) {
        if (obj[str[i]]) {
            obj[str[i]] = +1;
        } else {
            obj[str[i]] = 1;
        }
    }
    return obj
}

// let str = 'hello world'
// console.log(count(str));

// 判断当前字符串是不是回文
function palindrome(str) {
    if (typeof str !== "string") return false;
    return str.split('').reverse().join('') == str
}