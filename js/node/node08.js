// let time ='2021-06-04 13:05';
// let offset = 8;
// // console.log("time",time);
// var d = new Date(time); //创建一个Date对象 time时间 offset 时区  中国为  8
// var localTime = d.getTime();
// var localOffset = d.getTimezoneOffset() * 60000; //获得当地时间偏移的毫秒数
// var utc = localTime + localOffset; //utc即GMT时间
// var wishTime = utc + 3600000 * offset;
// console.log('wishTime',new Date(wishTime));
// nextTick原理
// TCP 拥塞控制：
// 非对称算法实现原理：信息摘要（为什么不能通过概率算法破解？）
// 非拥塞算法
// 1 YY
// 2 酷狗  小红书×
// 3 名创优品   欢聚×
// 4 步步高
// 5 坚果投影
// 7 顺丰
// 8 海康√
// 9 TCL 
// 0 富途
// 11 京东
// 12 平安
// 13 华润

function red() {
    console.log('red');
}

function green() {
    console.log('green');
}

function yellow() {
    console.log('yellow');
}

// 红路灯控制：
// var light = function (timmer, cb) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             cb();
//             resolve();
//         }, timmer);
//     });
// };

var step = function () {
    Promise.resolve().then( () => {
        return light(3000, red);
    }).then( () =>{
        return light(2000, green);
    }).then( ()=> {
        return light(1000, yellow);
    }).then( ()=> {
        step();
    });
}
function light(timer, cb) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            cb();
            resolve();
        }, timer)
    })
}

var step = async function () {
    await light(3000, red);
    await light(2000, green);
    await light(1000, yellow);
    step();
}

// step();

// async 获取错误

function judeBoole(params) {
    return new Promise((resolve, reject) => {
        if (params > 0) {
            setTimeout(() => {
                resolve("success");
            }, 100)
        } else {
            reject("参数错误--")
        }
    })
}

var start = async function () {
    let one = await judeBoole(-2);
    console.log('one---', one);
    try {
        let two = await judeBoole(1);
        console.log('two---', two);
    } catch (e) {
        console.log("catch---", e)
    }
    console.log('tree!');
}
start()