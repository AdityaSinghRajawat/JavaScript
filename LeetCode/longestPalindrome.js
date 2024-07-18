/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (s.length < 1 || s === null) return "";

    let longest = "";

    for (let i = 0; i < s.length; i++) {
        // Odd length palindrome
        let oddPalindrome = expandFromCenter(s, i, i);
        // Even length palindrome
        let evenPalindrome = expandFromCenter(s, i, i + 1);

        if (oddPalindrome.length > longest.length) {
            longest = oddPalindrome;
        }
        if (evenPalindrome.length > longest.length) {
            longest = evenPalindrome;
        }
    }

    return longest;
};

function expandFromCenter(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    // Return the palindrome
    return s.substring(left + 1, right);
}

console.log(longestPalindrome("babad")); // "bab" or "aba"