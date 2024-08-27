
let longestSubstringKUniqueChars = (string, k) => {

    let i = 0, j = 0;
    let max = 0;
    let map = {};

    while (j < string.length) {
        map[string[j]] = map[string[j]] ? map[string[j]] + 1 : 1;

        if (Object.keys(map).length < k) {
            j++;
        } else if (Object.keys(map).length === k) {
            max = Math.max(max, j - i + 1);
            j++;
        } else {
            while (Object.keys(map).length > k) {
                map[string[i]]--;
                if (map[string[i]] === 0) delete map[string[i]];
                i++;
            }
            j++;
        }
    }
    return max;
}

console.log(longestSubstringKUniqueChars('aabacbebebe', 3)); // 7
console.log('--------------------------------------');
console.log(longestSubstringKUniqueChars('aabacbebebe', 2)); // 6
console.log('--------------------------------------');
console.log(longestSubstringKUniqueChars('aabacbebebe', 1)); // 2