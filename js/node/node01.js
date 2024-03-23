// fibonacci 算法例子

// 输出要求的全部斐波那契数

class fibonacciClass {
    constructor() {
        // 构造函数
        
    }
    /**
     *
     *
     * @param {*} number 求第几位前的全部斐波那契数
     * @memberof fibonacciClass
     */
    finalAll(number) {
        let arr = [];
        arr[0] = 0;
        arr[1] = 1;
        arr[2] = 1;
        if (number > 2) {
            for (let i = 3; i <= number; i++) {
                arr[i] = arr[i - 1] + arr[i - 2];
            }
        }
        return arr;
    } 

    // 查询第几个
    finalOne(number) {
        let a = 1,
        b = 2,
        c;
        if (number > 2) {
            for (let i = 3; i <= number; i++) {
                c = a + b;
                a = b;
                b = c;
            }
            return c
        }else{
            return number
        }
    }
}

let fibonacciDemo = new fibonacciClass();
console.log(fibonacciDemo.finalOne(3));