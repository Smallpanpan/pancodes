function demo(name) {
    console.log(name);
}


//防抖函数 利用闭包,也就是只触发最后一次
function debounce(fn,delay) {
    let timer;
    // 形成闭包  下次触发的时候仍然存在内存中
    return function () {
        // 每次调用前都需要清空之前定时器
        clearTimeout(timer);
        timer = setTimeout(() => { 
            fn.apply(this, arguments);
        },delay);
    }
}


// 防抖马上执行

function immDebounce(fn, wait, immediate = true) {
    let timer, context, args;
    // 标准防抖函数
    const later = () => {
        setTimeout(() => {
            timer = null; //清除定时器
            if (!immediate) { //如果不是马上执行
                fn(context, args);
            }
        }, wait);
    }
    return function (...params) {
        if (!timer) { //当前无执行
            timer = later();
            if (immediate) {
                fun(this, params);
            } else {
                context = this;
                args = params;
            }
        } else { //执行防抖
            clearInterval(timer);
            timer = later();
        }
    }
}


//防抖例子
let date = new Date();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
console.log(`开始: ${minutes+":"+seconds}`);
// 防抖函数
function debounceDemo() {
    let date = new Date();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    console.log(`防抖触发时间: ${minutes+":"+seconds}`);
}

// 防抖应用
let start = debounce((a) => {
    let date = new Date();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    console.log(`防抖触发时间: ${minutes+":"+seconds+a}`);
}, 5000);
let start2 = debounce(() => {
    let date = new Date();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    console.log(`防抖触发时间1111: ${minutes+":"+seconds}`);
}, 3000);
// start('1');
// start('2');
// start('3');
// start2();
// start2();
// start2();

// 节流结束执行
function throttle1(fn, wait = 50) {
    let timer; //进入默认开启
    return function () {
        if (timer) { //当前如果有定时任务 取消执行
            return
        }
        timer = setTimeout(() => {
            fun(this, arguments);
            clearTimeout(timer); //清除定时器
            timer = null; //清除定时标志
        }, wait)

    }
}

function throttle2(fn, wait = 50) {
    let timer;
    return function () {
        if (timer) {
            return
        }
        fn(this, arguments);
        timer = setTimeout(() => {
            clearTimeout(timer);
            timer = null;
        }, wait);
    }
}
//节流马上执行
// function throttle(fn, timer) {
//     let timeout = true;
//     return function () {
//         if (timeout) {
//             timer = false;
//             fn.apply(this, arguments); //执行
//             setTimeout(() => {
//                 timer = true;
//             }, timer)
//         }
//     }
// }

// 节流函数
function throttle(fn, timer) {
    let timeout
    return function () {
        if (!timeout) {
            fn.apply(this, arguments); // 解决this指向和参数传入问题
            timeout = setTimeout(() => {
                timeout = null;
            }, timer);
        }
    }
}

// 并发控制：假设最大支持的工作线为5个，先开启5个工作线，每执行完一个任务，从任务池取下一个任务，开始执行。保持五个工作线一直在执行任务-取任务-执行任务，直到任务池中的任务都取完，则直接返回，停止工作线。
function startLimitPool(tasks, max, callback) {
    const result = []
    Promise.all(Array.from({
        length: max
    }).map(() => {
        return new Promise(resolve => {
            function runTask() {
                console.log(tasks.length)
                if (tasks.length <= 0) {
                    resolve()
                    return
                }
                const task = tasks.shift()
                task().then((res) => {
                    result.push(res)
                    runTask()
                }).catch(e => {
                    result.push({
                        error: e
                    }) //捕获错误
                    runTask()
                })
            }
            runTask()
        })
    })).then(() => callback(result))
}











// 方法二 先投放任务，直到工作区满了，当某个任务执行结束后，通知继续存放任务，直到任务区满了，一直循环操作，直到工作区正在执行的任务数为0，表示全部执行完毕。然后返回全部执行结果，执行回调函数。
function startLimitPool2(tasks, max, callback) {
    class TaskQueue {

        constructor(maxNum) {
            this.maxNum = maxNum
            this.running = 0
            this.queue = []
            this.results = []
            this.callback = null
        }
        pushTask(task) {
            this.queue.push(task)
            this.next()
        }
        next() {
            while (this.running < this.maxNum && this.queue.length) {
                const task = this.queue.shift()
                task().then((res) => {
                    this.results.push(res)
                }).finally(() => {
                    this.running--
                    this.next()
                })
                this.running++
            }

            if (typeof this.callback === "function" && this.running == 0) {
                this.callback.call(null, this.results)
            }
        }
    }

    const queue = new TaskQueue(max)
    queue.callback = callback
    tasks.forEach(task => queue.pushTask(task));
}



// callback 函数例子

function callbackdDeom(cb) {
    setTimeout(() => {
        cb(222);
    }, 1000)
}

//异步操作：
function ansyc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(11111);
            resolve(11111);
        }, 1000)
    })
}

function ansyc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(122222);
            resolve(122222);
        }, 1000)
    })
}

function ansyc3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(33333);
            resolve(33333);
        }, 3000)
    })
}

function ansyc4() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(144444);
            resolve(144444);
        }, 1000)
    })
}

function ansyc5() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(255555);
            reject(255555);
        }, 4000)
    })
}
// 数据劫持方法 observe()
function observe(obj) {
    // 判断类型
    if (!obj || typeof obj !== 'object') {
        return;
    }
    Object.keys(obj).forEach(key => {
        defineReactive(obj, key, obj[key]);
    })
}

function defineReactive(obj, key, val) {
    // observe(val);
    Object.defineProperty(obj.key, {
        enumerable: true,
        configurable: true,
        get: function reactiveGetter() {
            console.log('get value');
            return val
        },
        set: function rectiveSetter(newValue) {
            val = newValue;
            console.log('change value ---', val);

        }
    })
}

// data.name  = 'lkw'
// startLimitPool([ansyc1,ansyc2,ansyc3,ansyc4,ansyc5],2,(res)=>{
//     console.log('res',res);
// })


// 函数式编程 与面向对象编程 把世界拆分为事物和事物之间的关系

// vue 路由相关概念
// $router 是router（路由）的全局实例对象，包含所有路由
// $route 是跳转路由的局部对象，每一个路由都会有一个$route 对象 
// JS 垃圾回收 ：标记清除（Mark and sweep）、引用计数（reference counting） 
// 使用 http 通讯利用SSL、TLS简历安全通道

// 手写一个原型继承函数
function father() {}

function son(params) {}
son.prototype = new father(); //使用原型来继承
son.prototype.constructor = father(); //对象增强
// 将新对象原型指向构造函数的原型
// 

// 工厂模式创建对象:将创建语句放在一个函数里，通过传入参数创建，最后返回创建的对象
function creatstudent(name, age) {
    var obj = new Object(); //创建空对象
    this.name = name;
    this.age = age;
    return obj
}
let object = {}; //字面量定义
// 构造函数创建
// new function()

// 深拷贝和浅拷贝的相关概念：含义 现实方法：Json.pase(JSON,stringify(object))
// JSON 方法不能完全实现深拷贝 可以使用lodash
// map set 数据结构
// 递归实现一个深拷贝
// 箭头函数和普通函数区别：this 指向
// promise 

// 浏览器的渲染过程  渲染性能问题
// JS精度问题 解决方案
// promise相关概念：含义 原理 优缺点 应用
// split => 将字符转为数组
// vue双向数据绑定：原理 实现过程
// vue的生命周期 含义 作用 
// VDOM diff vue渲染
// vuex 含义 


//异步
Math.floor(Math.random()*10);    //生成 0 - 9 的随机整数
function post() {
    let time = new Date();
    console.log('start',time.getHours(),':',time.getMinutes(),':',time.getSeconds());
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let ran = Math.floor(Math.random()*10); 
            let time = new Date();
            console.log(time.getHours(),':',time.getMinutes(),':',time.getSeconds());
            console.log('res:',ran);
            resolve(ran);
        }, 3000)
    })
}

async function getPost(){
    return new Promise((resolve,reject)=>{
        let msg =await post();
        if(msg === 5){
            resolve(msg);
        }else{
            resolve(await getPost());
        }
    })
} 

// 获取url后的参数
function getUrlKey(url, key) {
    const search = url.split('?')[0]
    let params = search.getAll('key')
    if(!params.length) {
        params = null
    }
    if(params.length == 1) {
        params = params[0]
    }
    return params
}