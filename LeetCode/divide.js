/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    // Handle edge cases
    if (dividend === 0) return 0;
    if (divisor === 1) return dividend;
    if (divisor === -1) {
        if (dividend === -2147483648) return 2147483647; // Handle overflow case
        return -dividend;
    }

    // Determine the sign of the result
    let sign = (Math.sign(dividend) === Math.sign(divisor)) ? 1 : -1;

    // Use absolute values for calculation
    let a = Math.abs(dividend);
    let b = Math.abs(divisor);
    let result = 0;

    // Use bitwise operations to divide
    while (a >= b) {
        let temp = b, multiple = 1;
        while (a >= (temp << 1) && (temp << 1) > 0) { // Check for overflow
            temp <<= 1;
            multiple <<= 1;
        }
        a -= temp;
        result += multiple;
    }

    // Apply the sign to the result
    result = sign * result;

    // Ensure the result is within the 32-bit signed integer range
    if (result < -2147483648) return -2147483648;
    if (result > 2147483647) return 2147483647;

    return result;
};

// Test cases
console.log(divide(10, 3)); // Expected output: 3
console.log(divide(7, -3)); // Expected output: -2
console.log(divide(0, 1)); // Expected output: 0
console.log(divide(-2147483648, -1)); // Expected output: 2147483647 (due to overflow)
console.log(divide(1, 1)); // Expected output: 1
console.log(divide(-1, -1)); // Expected output: 1
console.log(divide(2147483647, 2)); // Expected output: 1073741823
