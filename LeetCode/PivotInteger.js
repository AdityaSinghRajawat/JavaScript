/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function (n) {

    let x = Math.sqrt((n * (n + 1)) / 2);

    if (Number.isInteger(x)) {
        return x;
    }
    return -1
};

let n = 5;
console.log(pivotInteger(n));
n = 3;
console.log(pivotInteger(n));
n = 2;
console.log(pivotInteger(n));
n = 1;
console.log(pivotInteger(n));
n = 4;
console.log(pivotInteger(n));
n = 6;
console.log(pivotInteger(n));
n = 7;
console.log(pivotInteger(n));
n = 8;
console.log(pivotInteger(n));
