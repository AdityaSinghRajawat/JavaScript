/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    return s.trim().split(' ').filter((word) => word.length).reverse().join(' ');
};

let s = "the sky is blue";
console.log(reverseWords(s));

s = "  hello world  ";
console.log(reverseWords(s));

s = "a good   example";
console.log(reverseWords(s));