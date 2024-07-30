/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (needle === "") return 0;

    let haystackLength = haystack.length;
    let needleLength = needle.length;


    for (let i = 0; i <= haystackLength - needleLength; i++) {
        if (haystack.substring(i, i + needleLength) === needle) {
            return i;
        }
    }

    return -1;
};

console.log(strStr("hello", "ll")); 