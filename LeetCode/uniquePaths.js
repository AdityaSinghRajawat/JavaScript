/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

function fact(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * fact(n - 1);
}

var uniquePaths = function (m, n) {
    return fact(m + n - 2) / (fact(m - 1) * fact(n - 1));
};

console.log(uniquePaths(3, 7)); // 28
console.log(uniquePaths(3, 2)); // 3
console.log(uniquePaths(7, 3)); // 28