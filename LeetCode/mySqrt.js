/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    // return Math.floor(Math.sqrt(x));

    let i = 1;
    let sq = i * i;

    while (x >= sq) {
        i++;
        sq = i * i;
    }

    return i - 1;
};

console.log(mySqrt(4)); // 2
console.log(mySqrt(8)); // 2
console.log(mySqrt(9)); // 3