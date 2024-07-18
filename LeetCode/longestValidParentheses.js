/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
    let maxLen = 0;
    let stack = [-1]; // Initialize stack with -1

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i); // Push index of '('
        } else {
            stack.pop(); // Pop the last '(' index
            if (stack.length === 0) {
                stack.push(i); // Push current index as base for next valid substring
            } else {
                maxLen = Math.max(maxLen, i - stack[stack.length - 1]); // Update maxLen
            }
        }
    }

    return maxLen;
};

console.log(longestValidParentheses("(()")); // 2
console.log(longestValidParentheses(")()())")); // 4
console.log(longestValidParentheses("")); // 0