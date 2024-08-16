/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n === 1) return 1;
    if (n === 2) return 2;

    let a = 1, b = 2;
    let result = 0;

    for (let i = 0; i < n - 2; i++) {
        result = a + b;
        a = b;
        b = result;
    }

    return result;
};

console.log(climbStairs(2)); // 2
console.log(climbStairs(3)); // 3
console.log(climbStairs(4)); // 5