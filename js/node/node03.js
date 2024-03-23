// 

// 输出要求的全部斐波那契数
/**
 *
 *
 * @class fibonacciClass
/**
 *
 *
 * @class fibonacciClass
 */
class fibonacciClass {
    constructor() {
        // 构造函数
    }
    // 
    start() {
        // 如何截取字符串www.qdjhu.com中的qdjhu？
        let str = "www.qdjhu.com";
        //    使用substr()  函数 （取字符串函数）
        let an1 = str.substr(4, 5);
        console.log(`an1:${an1}`);
        // 使用.标志切割字符split 取返回结果第二个
        let an2 = str.split('.')[1];
        console.log(`an2:${an2}`)
    }
    /**
     *vue3.0 和 VUE2.0 的区别：双向数据绑定
     *vue2.0 是使用object.defineProperty() 方法进行劫持;Object.defineProperty不支持对数组监听(无法监控到数组下标的变化，导致通过数组添加元素，不能实时响应.)
     *vue3.0 是使用ES6 的代理proxy API 进行数据代理。Proxy不仅可以代理整个对象，还可以代理数组。还可以代理动态增加的属性。vue3.0默认进行懒观察（lazy observation）。
      在 2.x 版本里，不管数据多大，都会在一开始就为其创建观察者。当数据很大时，这可能会在页面载入时造成明显的性能压力。3.x 版本，只会对「被用于渲染初始可见部分的数据」创建观察者，而且 3.x 的观察者更高效。
更精准的变更通知。
     *
     * @memberof fibonacciClass
     */
    vue3(){

    }
    regx() {
        // 正则表达例子
        let arr = '';
        let reg = /^[a-zA-Z]{1}\w{4,19}/ //正则表达式子 可网上找具体 获取随机数：Math.randon()=>只会产生0-1 之间的小数
        // 判断使用  如果匹配则返回true 否则返回false
        
        let temp = reg.test(arr);
        console.log(temp);
    }
    // 正则表达:
    // replace 函数
    replace() {
        let str = ` abcee`;
        // JS 空格符表示：/^\s*/g
        let str1 = str.replace(/^\s*/g, '');
        let a = '123';
        // console.log(parseInt(a)); parseInt 提取整数部分 parseFloat 提取浮点型 Math.floor 往下取整1.9 1.8 取整都为1
        // 页面刷新：
        location.reload(); //像点击F5 一样刷新页面
        location.replace(location.href) //重新从服务端获取数据加载页面 
        console.log(typeof (null));
        console.log(typeof (undefined));
    }
    // JS实现数组去重 constructor 阻止冒泡事件：click.stop.prevent()
    // 使用set() 函数（哈希函数储存） 数组转字符串 ： join(',') 字符串转数组split(',') 数组删除：splice(index,num);   index:删除下标 ，num 删除下标后的位数
    unique(arr) {
        return Array.from(new Set(arr));

    }
    
    /**
     *判断某个JS对象是否数组
     *
     * @param {*} arr
     * @memberof fibonacciClass
     */
    isArray(arr) {
        // 方法①
        Array.isArray("arr"); //是的话返回true
        // 方法②
        arr.constructor == Array; //是的话返回true
        location.href = URL; //点击刷新页面
        a.href = URL; //执行A标签 
    }
    /**
     *字符串去重
     *输入 自字符 去掉重复字符
     *思路：使用set()函数 保存has值的原理： 先将字符串转化为Array数组，然后在转化为Set()对象 ，再转化为数组 在转化为字符串
     *arr.pop()是删除最后一个元素  arr.shift() 是删除数组中第一个元素 /arr.unshift(arr1)  从数组arr的开头插入元素值arr1  
     *str.slice([start],[end]) (切割字符)是返回字符串从start 到end的字符串（不包括end） str.splice([start],[end],str) (焊接字符) 是删除从stat 到end（但不包括end）的字符，在原来的start位置插入str字符
     *函数方面：什么函数作用域 执行对象查找的时候永远不会查找到该类型  hasOwnProperty 
     * @param {*} 
     * @memberof fibonacciClass
     */
    uniqueStr(str) {
        return Array.from(new Set(Array.from(str))).join('');
    }
    /**
     *获取浏览器地址栏URL全部参数，并返回一个JSON字符串
     *
     * @param {*} name
     * @memberof fibonacciClass
     */
    getParamenters(name) {
        let url = window.location.href; //获取当前url
        let host = window.location.host;
    }
    /*
     *什么是JavaScript的this 一般指的是主体对象一般是
     *IE内核没有捕获事件过程 IE内核事件模型是冒泡型事件
     *标准DOM 事件模式 则是捕获冒泡 事件类型 ：当开发者在一个元素注册事件以后，这个事件的响应顺序是 从window（顶级） 开始一级一级往下传播，直到捕获到该元素后的事件捕获结束；
     *事件开始冒泡，一级一级向父层元素冒泡。 
     *这个过程的注册机制：DOM标准的浏览器事件是通过addEventListener方法注册，而IE内核的浏览器者是通过： attachEvent 注册
     *当浏览器窗口大小在改变时，哪个事件会触发？ window.resize = ()=>{}
     *JS 事件绑定方法：
     *①直接在DOM 标签中绑定： <input onclick="alert('this is onlick')"></input>
     *②在JS代码中绑定 doucument.getElementById('deom').onclick = ()=>{}
     *③ doucument.getElementById('deom').addEventListener('click',()=>{});
    
     *call 与 apply 的区别
     * 异步请求
     * JS 精度问题处理 先转为整数，运算结束后再转为对应小数
     */

    diffStrsub(){
        //substr 与substring 的区别：都为切取字符串的子串，函数第二个参数 substr 是为长度；substring 第二个参数是 子串结尾下标
        let str = 'ABCDEF';
        console.log(`substr:${str.substr(2,3)}`);       //输出：CDE
        console.log(`substring:${str.substring(2,3)}`);       //输出：C
    }

    /*
    HTML5 的考点有哪些？
    HTML5新特性？svg 可缩放矢量图形，基于文本的图形语言
    新特性有什么
    
    */

}

const demo = new fibonacciClass();

demo.diffStrsub();