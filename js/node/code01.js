// 实现青蛙跳算法,当前青蛙能跳1级台阶、2级台阶、3级台阶，那么n级台阶青蛙有多少种跳法
/**
 * 数学算法分析：如果是n=1，const = 1
 * n = 2 const = 1 + 1 = 2
 * n = 3 const = 3
 * 使用递归算法，可以得出当前第N级会退可以会退到n-1（那么就是当前n-1的数量），回推到n-2，回退到n-3的
 */
function jumpWays1(n) {
    if(n<=0) {
        return 0
    } else if(n < 3){
        return n
    } else if(n === 3) {
        return 4
    }
    return (jumpWays1(n - 1) + jumpWays1(n - 2) + jumpWays1(n - 3));
}


/**
 * 使用动态规划，这是一道动态规划经典题目，我们可以使用一个数组来存储当前每个台阶对应跳的方法次数
 * 得出 dp[n] = dp[n-1] + dp[n-2] + dp[n-3],然后遍历这个数组将可计算的都存入这个数组里面
 */
// 实现青蛙跳算法，当前青蛙可以跳1级台阶、2级台阶、3级台阶、4级台阶，那么n级台阶青蛙有多少种跳法
function jumpWays2(n) {
    let dp = new Array(n+1);
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 4;
    if(n<=0) {
        return 0;
    }else if(n < 4) {
        return dp[n];
    }
    for(let i=4; i<=n; i++) {
        dp[i] = dp[i-1] + dp[i-2] + dp[i-3];
    }
    return dp[n];
}

//动态规划经典题：青蛙跳,使用数组存储
function jumpWay(n) {
    let dp = new Array(n+1)
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 4;
    if(n<=0) {
        return 0;
    }else if(n < 4) {
        return dp[n]
    }
    for(let i=4; i<n; i++) {
        dp[i] = dp[i-1] + dp[i-2] + dp[i-3]
    }
    return dp[n]
}
// 青蛙跳算法   
function jumpWay(n) {
    if(n<=0) {
        return 0;
    }else if(n < 3) {
        return n;
    }else if(n === 3) {
        return 4;
    }   
}
