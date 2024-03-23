console.log('0');  //同步任务先执行
setTimeout(() => {   //异步任务，放到同步任务执行之后再触发
    console.log('1');   //同步
    new Promise((resolve) => {
        console.log('2');  //promise同步执行任务
        resolve()          //resolve进入异步队列
        console.log('3');
    }).then(() => {
        console.log('4');   //promise then为微任务，resolve触发
    }) 
}, 0);
function add() {
    return new Promise((resolve) => {
        console.log('5');   //promise 同步代码执行
        resolve(111)
        console.log('6');   
    }).then(() => {
        console.log('7');   // 微任务
    }) 
}
add().then(res=>{
 console.log('res',res)
})

console.log('8');  // 同步代码执行

// 输出结果 0 5 6 8 7 1 2 3 4
