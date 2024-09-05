/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {

    let max = 0;

    for (let uniqueTarget = 1; uniqueTarget <= 26; uniqueTarget++) {

        let i = 0, j = 0;
        let map = {};
        let uniqueCount = 0;
        let countAtleastK = 0;

        while (j < s.length) {

            map[s[j]] = map[s[j]] ? map[s[j]] + 1 : 1;

            if (map[s[j]] === 1) uniqueCount++;
            if (map[s[j]] === k) countAtleastK++;

            while (uniqueCount > uniqueTarget) {
                if (map[s[i]] === k) countAtleastK--;
                map[s[i]]--;
                if (map[s[i]] === 0) uniqueCount--;
                i++;
            }

            if (uniqueCount === uniqueTarget && uniqueCount === countAtleastK) {
                max = Math.max(max, j - i + 1);
            }

            j++;

        }
    }
    return max;
};

// Test cases
console.log(longestSubstring('aaabb', 3)); // 3
console.log('--------------------------------------');
console.log(longestSubstring('ababbc', 2)); // 5
console.log('--------------------------------------');
console.log(longestSubstring('ababacb', 3)); // 0