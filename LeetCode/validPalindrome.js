/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');

    // return s === s.split('').reverse().join('');
    let start = 0, end = s.length - 1;

    while (start <= end) {
        if (s[start] !== s[end]) {
            return false;
        }
        start++;
        end--;
    }

    return true;
};

let s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s)); // true

s = " asdfgnhdfsd ";
console.log(isPalindrome(s)); // false