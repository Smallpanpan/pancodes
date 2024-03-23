/** 
 * 




var可以重复声明，let不行。
变量分为 声明和赋值两个过程 所以存在变量提升
var 变量在函数作用域的最顶层被注册和初始化，这样符合严格的变量提升概念————在注册和初始化阶段是没有停顿的。
let 提供了更严格（涉及编译原理）编译规则，规定定义前无法引用
声明提升是变量在作用域顶层处注册和初始化耦合的结果。然而let的注册和初始化阶段是解耦的，这就使得声明提升对let无效。这种解耦造成了变量无法被引用的时间死区。
ES6 新数据结构 map set属性。
Set特性：类似数组，只不过成员都是唯一的，没有重复的值。
set本身就是一个构造函数，用于生成Set数据结构。
字符串去重最简单方法 let newArr = [...new Set(oleArr)]

Map特性：类型对象，但“键”的范围不限于字符串，可以是各种类型，包括对象。 
有序；
map对象可以用过size属性获取成员总数。
在频繁增删键值对的场景下表现更好。

JavaScript对象特性：本质上是键值对，但只能用字符当作键。
无序；
对象长度不能通过.length 获取，用原生 Object.keys返回的数组，可以获取数组长度
（PS：Object.keys 是遍历对象的可枚举属性，返回该属性组成的数组；eg：Object.keys(myObj)）
在频繁添加和删除键值对的场景下未作出优化。





什么是事件流？说一下事件流的过程
JS运行机制
如何遍历一个dom树
function traversal(node){
    if(node && node.nodeType === 1){
        console.log(node.tagName)
    }
    let childNodes = node.chailNodes,
    item;
    for(let i = 0;i<childNodes.length;i++){
        item = childNode[i];
        if(item.node === 1){
            traversal(item)
        }
    }
    
}




说一下对bind，call，apply三个函数的认识，自己实现一下bind方法。

bind 的作用跟上述两个作用一样，只是bind会返回一个函数，可以通过bind实现柯里化 
call、apply、bind 使用关系



function asyncAjax(post,ajax){
    let arr = [];
    arr.push(post);
    return async function posts(arr){
        
    }
}



如何处理多条并发，例如有两个ajax 处理并发最大只能纯在3条？
如何理解JS函数式编程
JS精度解决方案
先变为整数（倍数成），运算结束结束后再转缩小为原来倍数（除倍数）。
使用第三方库：big.js Math.js 解决
转化为string类型，模拟运算再转化。
promise基本概念
promise是异步编程的一种解决方法，可以把异步操作以同步方式表达出     来。
promise避免了层层嵌套循环，使异步操作简单。
promise 有三个状态：pending(进行中)  fulfilled（成功） rejected(失败)
状态只能由进行中转化为 成功 或进行中转化为失败，且不可逆。
promise 的缺点
无法取消执行，一旦创建则立即执行，中途无法取消
如果不设置回调函数，promise内部错误则无法抛出异常。
处于pending状态，无法获知目前进展到哪个阶段。
promise all 的缺点
Promise all 只有在全部异步都成功(resolve) 才会调用.then 成功回调，如果其中有一个失败了直接返回失败回调。
如果一个失败了也需要回调函数，可以利不管是resolve和reject都会执行；.then 返回一个函数。
优化封装
 function handlePromise(promiseList) {
    return PrmiseList.map(promise=>{
        promise.then((res) => ({ status: 'ok', res }), (err) => ({ status: 'not ok', err }))
    })
  }

//使用
Promise.all(handlePromise([p1,p2,p3])).then(res=>{...})

使用ES11 出现的新方法： Promise.allSettled  可以获取每个promise 的状态，不管成功或者失败。




getPrototypeOf 结果不同。类继承中子类会 [[Prototype]] 链接到父类，原型继承中的构造函数都是通过 prototype 指向的原型对象相互联系的。一般在原型继承中，子构造函数的原型对象是父构造函数，或者子构造函数的原型对象 [[Prototype]] 链接到父构造函数的原型对象。
this 创造顺序不同。ES5 的继承，实质是先创造子类的实例对象this，然后再将父类的方法添加到this上面（Parent.apply(this)）。ES6 的继承先将父类实例对象的属性，加到this上面（所以必须先调用super方法），然后再在子类中修改this。
类继承中的super 做了什么操作
在类继承中，this创建顺序是：先穿件父类的对象属性绑定到当前this,再使用super 在子类修改this；
super是在子类调用父类的构造函数或实例，修改this。
子类实例的构建，基于父类实例，只有super方法才能调用父类实例。
多维数组转一维数组
使用数组的join()： newArr = arr.join().split(',');
newArr = arr.toString().split(',');
递归调用
let arr = [1, 2, 3, 4, 5, [6, 7, 8, [9, 10, 11, 12, [13, 14, 15, 16]]]]
let newArr = [] // 存放转化后的一维数组
function arrConversion (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
        //遍历如果是数组对象，则继续递归
      arrConversion(arr[i])    
    } else {
      newArr.push(arr[i])
    }
  }
}
arrConversion(arr)

递归优化
var arr = [1,2,3,[4,5,[6,7]]];
 function change(arr) {
      var newArr = [];
      arr.map(item => typeof item === 'object' ? newArr = newArr.concat(change(item)) : newArr.push(item))
      return newArr;
 }
console.log(change(arr))

flat() 函数降维
// 二维数组：默认拉平一层
[1, 2, [3, 4, [5]]].flat();
// [1, 2, 3, 4, [5]]

// 四维数组：设置拉平两层
[1, 2, [3, 4, [5, [6, 7]]]].flat(2);
// [1, 2, 3, 4, 5, [6, 7]]

// 设置拉平所有层
[1, 2, [3, 4, [5]]].flat(Infinity);
// [1, 2, 3, 4, 5]

reduce降维


const flattenDeep = (arr) => Array.isArray(arr)
  ? arr.reduce( (a, b) => [...a, ...flattenDeep(b)] , [])
  : [arr]

const newArr = flattenDeep (oldArr);



JS对象遍历
ES6箭头函数、匿名函数、普通函数的区别
匿名函数总结
匿名函数需要讲地址赋值给另一个变量let a，然后再用a来调用函数；
普通函数总结
this总是代表它的直接调用者，如obj.func,那么func中的this就是obj。
在默认情况下（非严格模式下，未使用’use strict’）,没有找到直接的调用者，则this指的是window。
在严格模式下没有直接调用者的函数中的this是undefine。
可以改变this指向，使用使用call、apply、bind、绑定this指的对象。
箭头函数特性总结
箭头函数是匿名函数的一种简写。
箭头函数没有原型，所以没有自身的this，箭头函数的this由词法作用域决定，由上下文确定，可以是上层对象作用域。
箭头函数内的this指向无法改变，bind()、call()、apply()均无法改变指向。
箭头函数不能作为构造函数，不能new 否则会报错
箭头函数不能绑定arguments，但可以使用...rest参数（即拓展符）
箭头函数不可以使用yield命令，因此箭头函数不能用作 Generator 函数。
JS严格模式和非严格模式的开启
严格模式开启：在对应脚本里面写 'use strict'
严格模式通过抛出错误来消除了一些原有静默错误。
严格模式修复了一些导致 JavaScript引擎难以执行优化的缺陷：有时候，相同的代码，严格模式可以比非严格模式下运行得更快。
严格模式禁用了在ECMAScript的未来版本中可能会定义的一些语法。
ES6模块会自动采用严格模式。

commonJS模块与ES6模块 模块体系
commonJS模块 使用require 引入模块，这种加载方式为“运行时加载”，会加载整体模块；
ES6模块 （通过export命令显示指定输出代码） 使用import 命令输入 这种加载为编译时加载或者静态加载，即ES6 可以在编译的时候就完成模块的加载，效率比commonJS模块的加载方式高。
描述一下promise的执行过程
promise 开始会定义 成功回调序列和失败回调序列。执行完异步操作，实例then的时候 ，传入 onFulfilled 调用成功回调序列 ，传入onRejected 调用失败回调序列。





rem是什么单位？
	rem（font size of the root element）是指相对于根元素的字体大小的单位。简单的说它就是一个相对单位。
	这意味着1rem等于html元素的字体大小（对于大多数浏览器而言，其默认值为16px）
	em（font size of the element）是指相对于父元素的字体大小的单位。
除了rem还有其他什么自适应单位？
	vh(把屏幕（视口）高度分为100%) vw（把屏幕（视口）宽度分为100%）
开放题：你使用过什么JS库？
Lodash 是一个一致性、模块化、高性能的 JavaScript 实用工具库。
Lodash 通过降低 array、number、objects、string 等等的使用难度.
Lodash 可以做
遍历 array、object 和 string
对值进行操作和检测
创建符合功能的函数
big.js 一个小型，快速的JavaScript库，用于任意精度的十进制算术运算
qs 一个 url参数转化 (parse和stringify)的轻量级js库
silly-datatime 格式化时间的模块
Axios 一个基于 Promise 的 HTTP 库，可用在 Node.js 和浏览器上发起 HTTP 请求
js-md5 生成md5
iscroll 移动端使用的一款轻量级滚动插件




什么东西会引起回流重绘 针对此的优化手段
webpack加快打包速度有什么方式
HTTP2.0为什么比HTTP1.0 快，HTTP2.0有什么特性？
router 原理以及跳转原理
vue孙子组件跟爷爷辈通讯方式：（用provide 、inject接收）
如何解决1px问题
移动端自适应解决方案（重点）
如何使用better-sroll 封装scroll解决大数列表异步数据请求问题。（如何处理异步和刷新之间的问题）
如何展开一个项目，请说说开展流程
如何处理问题，通过什么方式处理问题
前端多线程开发
webpack打包过程
http3.0新特性

面试反馈：对基础知识掌握不好（知识面广度不够全面），回答不确定（即使答错也要肯定自己的答案）
HR面不过：不肯定目标，要表达喜欢这份工作、接受大小周、接受城市安排。为什么选择这座城市：处于对这座城市的了解，适合待在这座城市，想要定居下来。



JD分析
1、对原生JavaScript、浏览器机制有深刻理解√。
2、对相关兼容问题有深刻理解。
3、HTTP的基本工作原理。
4、掌握ES6+，对VUE使用了解。

1、熟悉一种及以上后台语言并有相应的开发经验
2、前端工程化的理解
3、前端性能优化










 * */ 

console.log('this is node04 test start................................................................');

// 手写实现一个promise.all
function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
      if(!Array.isArray(promises)){
        reject(new Error('promise must be an Arrya'))
      }
      let result = []
      let completedCount = 0
      promises.forEach((promise,index)=>{
        promise.then((res)=>{
          result[index] = res
          completedCount++
          if(promises.length == completedCount) {
            resolve(result)
          }
        }).catch((error)=>{
          reject(error)
        })
      })
  })
}


// 实现promise.allSettled
function promiseAllSettled(promises) {
  return new Promise((resolve, reject) => {
    if(!Array.isArray(promises)){
      reject(new Error('promise must be an Array'))
    }
    let result = []
    let completedCount = 0
    promises.forEach((promise,index)=>{
      promise.then((res)=>{
        result[index] = {status: 'fulfilled', value: res}
      }).catch((error)=>{
        result[index] = {status: 'rejected', value: error}
      }).finally(()=>{
        completedCount ++ 
        if(completedCount == promises.length){
          resolve(result)
        }
      })
    })
  })
}


// 写一个模仿http请求的异步函数，
// timer 为请求发出到返回的时间；默认为1s
let httpRequest = (timer=1000,name) => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`http ${name} request begin`)
        if(name === 'rejected') {
          reject(`fail -- timer:${timer}--name:${name}`)
        }else{
          resolve(`success -- timer:${timer}--name:${name}`)
        }
      }, timer)
   })
}

// 封装async请求


// promiseAllSettled([httpRequest(1000,'age'),httpRequest(500,'name1'),httpRequest(2000,'rejected'),httpRequest(2000,'men')]).then((res) => {
//     console.log('res return:--',res)
// }).catch(error=>{
//   console.log('error:',error)
// })

function limitPool(tasks, max, callback){
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
              task.then((res) => {
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

// 异步顺序控制
async function sendSequentialRequests(requests) {
  try {
      const responses = [];
      for (const request of requests) {
        const response = await request();
        responses.push(response);
      }
      return responses;
  } catch (error) {
      console.log('Error in sending sequential requests:', error);
  }
}

async function gerRes() {
  let res = []
  let requests = [
    {timer: 3000,url:'01'},
    {timer: 5000,url:'02'},
    {timer: 1000,url:'03'},
    {timer: 2000,url:'04'},
    {timer: 2000,url:'05'},
  ]
  for (const request of requests) {
   let temp = await httpRequest(request.timer,request.url)
    res.push(temp)
  }
  console.log('完成',res)
}

const geturl = async () => {
  return new Promise((resolve, reject) => {
    const  timer = 2000
    setTimeout(() => {
      console.log(`http url request begin`)

        resolve(`success -- timer:${timer}--name:1`)
    }, timer)
 })
}
const getName = async () => {
  return new Promise((resolve, reject) => {
    const  timer = 5000
    setTimeout(() => {
      console.log(`http getName request begin`)

        resolve(`success -- timer:${timer}--name:2`)

    }, timer)
 })
}
const getAge = async () => {
  return new Promise((resolve, reject) => {
    const  timer = 1000
    setTimeout(() => {
      console.log(`http getAge request begin`)

        resolve(`success -- timer:${timer}--name:3`)

    }, timer)
 })
}
const getSex = async () => {
  return new Promise((resolve, reject) => {
    const  timer = 1000
    setTimeout(() => {
      console.log(`http getSex request begin`)

        resolve(`success -- timer:${timer}--name:4`)

    }, timer)
 })
}
const getCook = async () => {
  return new Promise((resolve, reject) => {
    const  timer = 1000
    setTimeout(() => {
      console.log(`http getCook request begin`)

        resolve(`success -- timer:${timer}--name:5`)

    }, timer)
 })
}
async function main () {
  const res = await sendSequentialRequests([geturl, getName, getAge, getSex, getCook])
  console.log('完成111',res)
}

main()