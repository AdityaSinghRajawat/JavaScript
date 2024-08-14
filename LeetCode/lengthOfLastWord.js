/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    return s.trim().split(' ').pop().length;
};

console.log(lengthOfLastWord("Hello World")); // 5
console.log(lengthOfLastWord("a ")); // 1
console.log(lengthOfLastWord("a")); // 1
console.log(lengthOfLastWord(" ")); // 0
console.log(lengthOfLastWord("")); // 0
console.log(lengthOfLastWord("a b")); // 1
console.log(lengthOfLastWord("a b ")); // 1