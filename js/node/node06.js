// 手写bind call apply (均可以改变this指向,返回this)
// call 、 apply 改变this 指向 作用相同 传参方式不同
// call 接受的是参数列表，apply接受则是一个参数数组
// bind 的作用跟上述两个作用一样，只是bind会返回一个函数，可以通过bind实现柯里化 （就是能绑定固定参数，能重复使用）

// 手写实现apply（接受数组为参数）

// 实现apply函数
Function.prototype.myApply = function (context) {
    var context = context || window;
    context.fn = this;
    var result;
    if (arguments[1]) {
        result = context.fn(...arguments[1]);
    } else {
        result = context.fn();
    }
    delete context.fn;
    return result;
}
// 实现call 
Function.prototype.myCalll = function (context) {
    var context = context || window;
    context.fn = this;
    var args = [...0].slice(1); //切割字符 从第一位到最后 修改传入参数
    var result = context.fn(...args);
    delete context.fn;
    return result;
}

Function.prototype.myCall1 = function(context,...args){
    let context = context || windows;
    context.fn = this;
    var result = constext.fn(...args);
    return result
}

// 优化封装：把promise all 的失败也一并输出
function handlePromise(promiseList) {
    promiseList.map(promise => {
        promise.then((res => ({
            status: 'success',
            res
        })), (err => ({
            status: 'error',
            err
        })))
    })
}



let a = {
    age: 1,
    jobs: {
        first: 'FE'
    }
}


// 实现继承
class father {
    constructor(name, age) {

    }
    demo() {

    }
}

class child extends father {
    constructor(name, age) {
        super(name, age);
    }
}


function Super() {

}
// 构造器继承
function sub() {
    Super.call(this, ...args);
}

// 原型链继承
sub.prototype = new Super();

// 组合继承就是把原型继承和构造器继承合在一起


// 闭包、异步考点 下列会输出什么  会输出6个六 setTimout 是异步，var形成闭包,而且不存在块级作用域，最后执行都是同一个i
for (var i = 0; i < 6; i++) {
    setTimeout(() => {
        console.log('var--',i)
    })
}

for(let i =0;i<6;i++){
    setTimeout(()=>{
        console.log(`let-- ${i}`)
    })
}