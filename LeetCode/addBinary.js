/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

function binSum(a, b, carry) {
    let sum = parseInt(a) + parseInt(b) + parseInt(carry);
    if (sum === 0) return { carry: '0', result: '0' };
    if (sum === 1) return { carry: '0', result: '1' };
    if (sum === 2) return { carry: '1', result: '0' };
    if (sum === 3) return { carry: '1', result: '1' };
}

var addBinary = function (a, b) {
    let m = a.length - 1;
    let n = b.length - 1;
    let carry = '0';
    let result = '';

    while (m >= 0 || n >= 0) {
        let bitA = m >= 0 ? a[m] : '0';
        let bitB = n >= 0 ? b[n] : '0';

        let sumResult = binSum(bitA, bitB, carry);
        result = sumResult.result + result;
        carry = sumResult.carry;

        m--;
        n--;
    }

    // If there's a leftover carry, prepend it to the result
    if (carry === '1') {
        result = '1' + result;
    }

    return result;
};

console.log(addBinary('11', '1')); // 100
console.log(addBinary('1010', '1011')); // 10101
console.log(addBinary('1', '0')); // 1
