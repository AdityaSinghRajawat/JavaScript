/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {

    let i = 0, j = 0;
    let seen = new Set();
    let str = '';
    let result = [];

    while (j < s.length) {

        str += s[j];

        if (j - i + 1 < 10) {
            j++;
        } else if (j - i + 1 === 10) {
            if (seen.has(str)) {
                if (!result.includes(str)) {
                    result.push(str);
                }
            } else {
                seen.add(str);
            }
            i++;
            str = s.substring(i, j + 1);
            j++;
        }

    }

    return result;
};

console.log(findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT")); // ["AAAAACCCCC", "CCCCCAAAAA"]
console.log('--------------------------------------');
console.log(findRepeatedDnaSequences("AAAAAAAAAAA")); // ["AAAAAAAAAA"]
console.log('--------------------------------------');
console.log(findRepeatedDnaSequences("AAAAAAAAAAAA")); // ["AAAAAAAAAA"]
