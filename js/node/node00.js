// temp

    /**不含有重复字符的
     *给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
     *思路：使用滑动移动法  先移动右指针 满足条件则继续滑动 不满足条件则滑动左指针  每次满足条件标记并比较出最大值
     * @param {*} s
     * @memberof demoClass
     */
function getLongOflength(str){
    const n = str.length
    let left = 0, // 左下标
    right = 0,     //右下标
    max = 0,        // 最大值
    temp = ''        //当前选中字符串
    for( ; right < n; right++){
        tmp = str[right]
        while(s.sice(left,right).indexOf(temp)!==-1 && left <= right){
            left++
        }
        max = Math.max(max,rigth-left+1)
    }
    return max
}

// 求最长不重复字符串  ：使用左右指针滑动，先滑动右指针，再滑动左指针收窄
function getLongOfStr(str){
    let left = 0, right = 0,max = 0,tmep = '',maxStr = ''
    for(;right<str.length;right++){
        temp = str[right]
        while(str.slice(left,right).indexOf(temp) != -1 && left<right){    //不满足新加条件 左指针往前移动
            left ++
        }
        if(max<right-left+1){
            max = right-left+1
            maxStr = str.slice(left,right)
        }
    }
}

// 快排
function quickSort(arr){
    if(arr.length <= 1){
        return arr
    }
    const mid = parseInt(arr.length/2);
    const midValue = arr.splice(mid,1)[0]
    let left = [], right = []
    for(let itme of arr){
        if(item < midValue){
            left.push(item)
        }else{
            right.push(item)
        }
    }
    return [...quickSort(left),midValue,...quickSort(right)]
}


// 字符数组转换
function split(){
    // 将字符串转为数组
    str.split(',')
    // 将数组转为字符串
    arr.join('')
}
// 正则表达
function regx(str){
    let reg = /^[a-zA-z]\w/
    let reg1 = /^s\*/g
    let reg3 = /\d+/g           //符合调价的为数字
    let temp = reg.test(str)   //判断是否满足条件
    str.replace(reg1,'')   //使用正则替换当前不符合条件的
    let num = 1234132
    let newNum = num.match(regs)   //输出符合条件的字符
    // 判断数组或者对象 
    Array.isArray(arr);
    arr.constructor == Array
    arr instanceof Array
}
// 防抖 最后触发
function debounce(fn, wait) {
    let timer
    return function() {
        // 最后一次触发，立即触发的搜索输入框，一段时间停止输入则执行搜索动作
        clearTimeout(timer)
        timer = setTimeout(()=>{
            fn.apply(this, arguments)
        },wait)
    }
}

// 节流， 立即触发第一次，可以用于刷新按钮
function throrrle (fn,wait) {
    let timer
    return function() {
        if(timer) {
            return
        }
        fn.apply(this, arguments)
        timer = setTimeout(() => {
            clearTimeout(timer)
            timer = null
        }, wait);
    }
}


// 异步并发控制
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
// 手写实现apply result context.fn = this
Function.prototype.myApply = function(context) {
    let result
    let context = context || window
    context.fn = this
    if(arguments[1]){
        result = context.fn(...arguments[1])
    }else{
        result = conext.fn()
    }
    return result
}

// 去除空字符串

function clear(str){
    let reg = /\s+/g
    return str.replace(reg,'')
}
// 判断是不是回文数
function palin(str){
    if(typeof str !== "string"){
        return false
    }
    return str.split('').reverse().join('') == str
}

// 原型继承
function father() {

}
function son() {
    father().call(this,...arguments)
}
son.prototype = new father()

// 红绿灯控制
function light(params,wait){
    new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // TODO 红灯控制
                console.log(params)
        },wait)
    })
}
async function step(){
    await light('red',3000)
    await light('gree',2000)
    await ligth('yellow',1000)
    step()
}
// 递归实现feibonacci数列

function fei(n){
    let memo = [0,1]
    let feibonacci = function(n) {
        if(memo[n] == undefined){
            memo[n] = feibonacci(n-2) +feibonacci(n-1)
        }
        return memo[n]
    }
    return feibonacci
}

function fei(n){
    if(n<0) {
        return
    }
    if(n==1 ||n==0){
        return n
    }
    return fei(n-1) + fei(n-2)
}

// 使用循环解决feibonaqi数列
function getFei(n) {
    let x = 0
    let y = 1
    if(n<0) {
        return 0
    }
    if(n<2) {
        return n
    }
    let result
    for(let i = 2; i < n ; i++) {
        result = x + y
        x = y
        y = result
    }
    return result
}

// 获取URL数组
function gerUrl(url){
    let obj = {}
    let arr = url.split("?")[1].split("&")
    for(let item of arr){
        let [key,value] = item.split("=")
        obj[key] = value
    }
    return obj
}

// 遍历数组
function getDeep(arr) {
    let newArr = arr
    let deep = 0
    while(newArr.length){
        let temp = []
        for(let item of newArr){
            if(Array.isArray(item)){
                temp = [...temp,item]
            }else{
                console.log(item)
            }
        }
        deep++
        newArr = temp
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

function getObjcet(obj){
    let n = Object.keys(obj).length;
    let objs = {}
    for(let i in obj){
        if(getObjcetDeep(obj[i],params)){
            objs = {...objs,...obj[i]}
        }
    }
    return obj
}

// 判断当前对象是否有某个元素：深度遍历 遍历到返回 false 匹配则返回true
function getObjcetDeep(obj,params) {
    let newObj = obj;
    if (Object.keys(newObj).length) {
        return false
    }
    for (let i in newObj) {
        if (newObj[i].constructor === Object || newObj[i].constructor === Arraay) {
            getObjcetDeep(newObj[i])
        } else {
            if(tempObj == params){
                return true
            }
        }
    }
    return false
}

// 求对象长度 Object.keys(obj).length

let obj = {
    'yyyy':DataCue.getFullYear()
}
for(let i in obj){
    format = format.replace(i,obj[i])
}

function getNum(){
    let num = 0
    return function(){
        return num++
    }
}

// 链表翻转
function reverseList(node){
    let pre = null;
    let curr = node;
    while(curr){
        let currnex = curr.next;
        curr.next = pre 
        pre = curr
        curr = currnex
    }
    return node
}