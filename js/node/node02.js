+// leetCode 题目解答过程

// 输出要求的全部斐波那契数
/**
 *
 *
 * @class demoClass
/**
 *
 *
 * @class demoClass
 */
class demoClass {
    constructor() {
        // 构造函数

    }
    /**
     *
     *  输入：A = [1,1,1,0,0,0,1,1,1,1,0], K = 2
        输出：6
        解释： 
        [1,1,1,0,0,1,1,1,1,1,1]
        粗体数字从 0 翻转到 1，最长的子数组长度为 6。
     *想法：采用滑动窗口模板思路
            ①需要转化解题思路：使K个零变为1 求最长1 的子串 等于求最长子串 满足条件：全部是1 且最多允许含有K个零
            ②熟记窗口滑动 发的模板

     * @param {*} A Array
     * @param {*} K int 
     * @memberof demoClass
     */
    longestOnes(A, K) {
        const n = A.length; //最长下标（right 的溢出值）
        let left = 0; //左、右下标
        let maxWindow = 0; //窗口的最大值
        let zeroCount = 0; //窗口中0的个数
        for (let right = 0; right < n; right++) {
            if (A[right] == 0) { //子串条件：单前的零必须少于等于K
                zeroCount++
            }
            while (zeroCount > K && left <= right) { //循环每次移动left 不满足子串条件 且length 不能大于right 
                // 计算zeroCount
                if (A[left] == 0) {
                    zeroCount--;
                }
                // left 往后移动一位
                left++;
            }

            maxWindow = Math.max(maxWindow, right - left + 1);
        }
        return maxWindow
    }
    // 求数组里 连续1最长的子串
    longestArr(A) {
        let Max = 0,
            temp = 0;
        if (A.length) {
            for (let i in A) {
                if (A[i] == 1) {
                    temp = temp + 1;
                } else {
                    temp = 0;
                }
                Max = temp > Max ? temp : Max;
            }
        }
        return Max
    }
    /**
     *给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
     *思路：使用滑动移动法  先移动右指针 满足条件则继续滑动 不满足条件则滑动左指针  每次满足条件标记并比较出最大值
     * @param {*} s
     * @memberof demoClass
     */
    lengthOfLongestSubstring(s) {
        const n = s.length; //最长下标（right 的溢出值）
        let left = 0; //左、右下标
        let maxWindow = 0; //窗口的最大值
        let tempString = '';
        for (let right = 0; right < n; right++) {
            tempString = s[right];
            // 不满足条件的话 就是新加进来的 字符串在s.slice[left,right] 中含有s[right] 字符串原生方法：arr.indexof(str)arr是否含有某个数，否返回-1  str 截取字符串函数：
            while (s.slice(left, right).indexOf(s[right]) != -1 && left <= right) { //不满足条件 有重复的字符串
                left++;
            }
            maxWindow = Math.max(maxWindow, right - left + 1);
        }
        return maxWindow
    }


    // 求最长不重复子串最大值方法二
    lengthOfLongStrt(s) {
        const occ = new Set(); //使用哈希值保存当前字符
        const n = s.length;
        // 右指针，初始值为 -1，相当于我们在字符串的左边界的左侧，还没有开始移动
        let rk = -1,
            ans = 0;
        for (let i = 0; i < n; ++i) {
            if (i != 0) {
                // 左指针向右移动一格，移除一个字符
                occ.delete(s.charAt(i - 1));
            }
            while (rk + 1 < n && !occ.has(s.charAt(rk + 1))) {
                // 不断地移动右指针
                occ.add(s.charAt(rk + 1));
                ++rk;
            }
            // 第 i 到 rk 个字符是一个极长的无重复字符子串
            ans = Math.max(ans, rk - i + 1);
        }
        return ans;
    }
    /**
     *给定一个字符串，请你找出其中不含有重复字符的 最长子串 的子串
     *思路：使用滑动移动法  先移动右指针 满足条件则继续滑动 不满足条件则滑动左指针  每次满足条件标记并比较出最大值 使用
     * @param {*} s
     * @memberof demoClass
     */
    lengthOfLongStr(s) {
        const occ = new Set(); //使用哈希值保存当前字符
        const n = s.length; //最长下标（right 的溢出值）
        let left = 0; //左、右下标
        let maxWindow = 0; //窗口的最大值
        let str = '';
        for (let right = 0; right < n; right++) {
            // 不满足条件的话 就是新加进来的 字符串在s.slice[left,right] 中含有s[right] 字符串原生方法：arr.indexof(str)arr是否含有某个数，否返回-1  str 截取字符串函数：
            while (s.slice(left, right).indexOf(s[right]) != -1 && left <= right) { //不满足条件 有重复的字符串
                left++;
            }
            if (maxWindow < right - left + 1) {
                str = s.slice(left, right + 1);
            }
            maxWindow = Math.max(maxWindow, right - left + 1);
        }
        return str
    }
    /**
     *描述求一个字符串中 最长的回文字符
     *思路：使用中心拓展法，先遍历字符，输出s.slice(left,right)
     * @param {*} s 字符串
     * @memberof demoClass
     */
    longestPalindrome(s) {
        if (s == null || s.length < 1) {
            return "";
        }
        let length = s.length;
        let start = 0,
            end = 0,
            tempMax = 0;
        let len1, len2, len = 0;
        for (let i = 0; i < length; i++) { //遍历每个字符为中心
            len1 = this.expandAroundCenter(s, i, i);
            len2 = this.expandAroundCenter(s, i, i + 1);
            tempMax = Math.max(len1, len2);
            if (len <= tempMax) {
                len = Math.max(len1, len2);
                start = i - parseInt((len - 1) / 2);
                end = i + parseInt(len / 2) + 1;
            }

        }
        return s.slice(start, end)
    }
    // 查找最长子回文字符串
    // 思路：使用滑动模块遍历所有字符串组合，当满足条件返回当前值，并与原有值比较
    getLongPam(str) {
        let right, left = 0; //定义初始指针
        let max = 0,
            temp, result; //组合字段               
        for (; left < str.length; left++) {
            temp = str[left];
            left = right;
            while (temp.split("").reverse().join("") == temp) { //新加字段是否能组合回文数
                right++;
                temp = str.slice(left, right);
            }
            if (max < right - left) {
                max = right - left;
                result = str[left, right];
            }
        }
        return result
    }

    expandAroundCenter(s, left, right) {
        while (left >= 0 && right < s.length && s[left] == s[right]) { //左右指针没有到达边界 以及 左右对称位相等 偶数位
            left--;
            right++;
        }
        return right - left - 1;
    }
    /**
     *判断输入的s是否回文数
     *思路：遍历一个字符串 符合子串的方式： 中心拓展法：先遍历一遍字符串 中第i每个字符为中心字符，然后拓展改
     * @param {*} s
     * @memberof demoClass
     */

    isPanlindrome(s) {
        let length = s.length;
        for (let i = 0; i < length; i++) {
            if (s[i] != s[length - i - 1]) { //收缩对应对比如果遇到其中一个对称位不相等，就不是回文数
                return false
            }
        }
        return true
    }
    /**
     *9.判断输入整数（包括负数） 是否回文数
     *思路：不用转化为字符串：取整数每一位 然后跟对应位对比 循环知道为零将整数全部向下取对应数字
     * @param {*} X 整数
     * @memberof demoClass
     */
    isPalindromeNum(x) {
        let temp = [];
        if (x < 0) {
            return false //负数都不是回文数
        } else if (x < 10) { //个位数都是回文数
            return true
        }
        let num = x;
        let cur = 0;
        while (num > 0) {
            cur = cur * 10 + num % 10;
            num = parseInt(num / 10);
        }

        return cur == x
    }

    /**
     *6.Z字形转换
     将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。
     *思路：输入字符串S 和行数n   输出对应新字符排列    
     *       等于：输入总数：S.length  和 行数 求列数，并从左往右、从上往下遍历出字符串 并组合字符串
     * @param {*} s
     * @param {*} numRows
     * @memberof demoClass
     */
    convert(s, numRows) {
        if (numRows === 1) return s;
        const rows = new Array(numRows).fill("");
        console.log('rows', rows);
        const n = 2 * numRows - 2;
        for (let i = 0; i < s.length; i++) {
            const x = i % n;
            rows[Math.min(x, n - x)] += s[i];
            console.log('111', rows);
        }
        console.log('rows', rows);
        return rows.join("");
    }
    /**
     *7. 整数反转
     *思路：判断 整数小于零 将整数转化为正整数； 当整数小于10 直接输出；   翻转整数
     * @param {*} x
     * @memberof demoClass
     */
    reverse(x) {
        let a = 1;
        let rex = 0;
        if (x < 0) {
            a = -1;
            x = -x;
        } else if (x < 10) {
            return x
        }
        while (x > 0) {
            rex = rex * 10 + x % 10;
            x = parseInt(x / 10);
        }
        if (rex >= Math.pow(2, 31) - 1) { //题目边界条件  整型不能超过2的31次方
            return 0
        }
        return a * rex;
    }


    /**
     *11. 盛最多水的容器 :
     *思路：使用滑动移动法 遍历数组构成的体积：计算体积公式：s[i,j] = min(i,j)*j-i
     * @param {*} height
     * @memberof demoClass
     */
    maxArea(height) {
        let length = height.length;
        let max = 0,
            temp;
        for (let left = 0; left < length - 1; left++) {
            for (let right = length - 1; right > left; right--) {
                if (!(height[right] < height[right + 1])) { //如果当前的高度比后面高度高，才有计算意义
                    temp = Math.min(height[left], height[right]) * (right - left);
                    max = Math.max(max, temp);
                }
            }
        }
        return max
    }
    /**
     *11. 盛最多水的容器 :
     *思路：使用双指针法：左右指针先从两边收缩，比较左右指针高度，高度低的指针收缩，知道左指针+1等于4指针 计算体积公式：s[i,j] = min(i,j)*j-i
     * @param {*} height
     * @memberof demoClass
     */
    maxArea2(height) {
        let right = height.length - 1,
            left = 0,
            max = 0,
            temp = 0;
        while (left < right) {
            if (height[left] < height[right]) { //判断左右指针 往里移动 
                ++left;
            } else {
                --right;
            }
            temp = Math.min(height[left], height[right]) * (right - left);
            max = Math.max(max, temp);
        }
        return max
    }
    /**
     *输出arr1中 在arr2没有出现的数组
     *思路：先遍历arr1  数组中每个项，使用indexOf() 对比该元素是否存在 存在则添加入新数组
     * @param {*} arr1  单数字/字符数组数组1
     * @param {*} arr2  单数字/字符数组数组2
     * @memberof demoClass
     */
    findNullofNum(arr1, arr2) {
        let res = [];
        for (let i in arr1) {
            if (arr2.indexOf(arr1[i])) {
                res = [...res, arr1[i]]
            }
        }
        return res
    }
    /**
     *快速排序实现  
     *思路：先选基准位，然后遍历该数组，比该基准位小的放右边，比基准位大的放右边；使用递归方法 要有递归条件
     *时间复杂度  O(logN)
     * @param {*} arr 无序数组 eg: arr = [1,6,8,5,7,2,9,3,4];
     * @memberof demoClass
     */
    quickSort(arr) {
        if (arr.length <= 1) {
            return arr;
        }
        let pivotIndex = parseInt(arr.length / 2); //获取中位数为基准位
        let pivot = arr.splice(pivotIndex, 1)[0]; //删除基准位数
        var left = [],
            right = []; //左右序列

        for (let i = 0; i < arr.length; i++) { //遍历区分序列
            if (arr[i] < pivot) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }
        return [...this.quickSort(left), pivot, ...this.quickSort(right)];
    }



    /**
     *冒泡排序实现：找最大
     *思路：冒泡排序，顾名思义，冲最前面(下面)，的元素开始遍历比较，将最大的元素往上放。
     *，从第一个元素开始，把当前元素和下一个索引元素进行比较。如果当前元素大，那么就交换位置，重复操作直到比较到最后一个元素，
     *那么此时最后一个元素就是该数组中最大的数。
     *时间复杂度：o(n²)
     * @param {*} arr
     * @memberof demoClass
     */
    bubble(arr) {
        let length = arr.length;
        for (let i = 0; i < length; i++) {
            for (let j = 1; j < length - i; j++) {
                if (arr[j - 1] > arr[j]) {
                    [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
                }
            }
        }
        return arr;
    }


}
module.exports = demoClass;

const demo = new demoClass();
let arr = [1, 6, 8, 5, 7, 2, 9, 3, 4];
console.log(demo.quickSort(arr));