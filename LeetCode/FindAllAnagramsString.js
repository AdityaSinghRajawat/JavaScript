/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {

    let i = 0, j = 0;
    let map = {};
    let result = [];

    for (let char of p) {
        map[char] = map[char] ? map[char] + 1 : 1;
    }

    let count = Object.keys(map).length;

    while (j < s.length) {

        if (map[s[j]] !== undefined) {
            map[s[j]]--;
            if (map[s[j]] === 0) count--;
        }

        if (j - i + 1 < p.length) {
            j++;
        } else if (j - i + 1 === p.length) {

            if (count === 0) {
                result.push(i);
            }

            if (map[s[i]] !== undefined) {
                map[s[i]]++;
                if (map[s[i]] === 1) count++;;
            }

            i++;
            j++;
        }
    }
    return result;
};

console.log(findAnagrams('cbaebabacd', 'abc')); // [0, 6]
console.log(findAnagrams('abab', 'ab')); // [0, 1, 2]
console.log(findAnagrams('baa', 'aa')); // [1]