/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let reverse = 0;
    let sign = x < 0 ? -1 : 1;

    x = Math.abs(x);

    while (x > 0) {
        reverse = reverse * 10 + x % 10;
        x = Math.floor(x / 10);
    }

    reverse = reverse * sign;

    if (reverse < Math.pow(-2, 31) || reverse > Math.pow(2, 31) - 1) {
        return 0;
    }

    return reverse;
};

let x = 123;
let result = reverse(x);
console.log(result); // 321

x = -123;
result = reverse(x);
console.log(result); // -321