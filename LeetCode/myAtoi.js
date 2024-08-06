/**
 * @param {string} s
 * @return {number}
 */
// var myAtoi = function (s) {
//     s = s.trim();

//     // let sign = Number(s) < 0 ? -1 : 1;
//     sign = s[0] === '-' ? -1 : 1;

//     let start = 0;

//     if (s[0] === '-' || s[0] === '+') {
//         s = s.slice(1, s.length);
//     }

//     for (let i = 0; i < s.length; i++) {
//         if (s[i] !== '0') {
//             start = i;
//             break;
//         }
//     }

//     s = s.slice(start, s.length);

//     for (let i = 0; i < s.length; i++) {
//         if (isNaN(Number(s[i]))) {
//             s = s.slice(0, i)
//             break;
//         }
//     }

//     s = Number(s) * sign;

//     if (s < Math.pow(-2, 31)) {
//         return Math.pow(-2, 31);
//     }

//     if (s > Math.pow(2, 31) - 1) {
//         return Math.pow(2, 31) - 1;
//     }

//     return s;

// };


/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    // Trim leading spaces
    s = s.trim();

    if (s.length === 0) return 0;

    let sign = 1;
    let index = 0;

    // Handle optional sign
    if (s[index] === '+' || s[index] === '-') {
        sign = s[index] === '-' ? -1 : 1;
        index++;
    }

    let result = 0;

    // Convert digits to integer
    while (index < s.length && s[index] >= '0' && s[index] <= '9') {
        result = result * 10 + (s[index] - '0');
        index++;
    }

    result *= sign;

    // Clamp to 32-bit signed integer range
    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;

    if (result > INT_MAX) return INT_MAX;
    if (result < INT_MIN) return INT_MIN;

    return result;
};


let s = "42";
let result = myAtoi(s);
console.log(result); // 42

s = "   -42";
result = myAtoi(s);
console.log(result); // -42

s = "4193 with words";
result = myAtoi(s);
console.log(result); // 4193

s = "+1";
result = myAtoi(s);
console.log(result); // 0

s = "  -0012a42";
result = myAtoi(s);
console.log(result); // 0

s = "   +0 123";
result = myAtoi(s);
console.log(result); // 0