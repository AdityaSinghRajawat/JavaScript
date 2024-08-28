
let longestSubstringNoRepeatChars = (string) => {
    let i = 0, j = 0, max = 0;
    let map = {};

    while (j < string.length) {
        map[string[j]] = map[string[j]] ? map[string[j]] + 1 : 1;

        if (Object.keys(map).length === j - i + 1) {
            max = Math.max(max, j - i + 1);
            j++;

        } else if (Object.keys(map).length < j - i + 1) {

            while (Object.keys(map).length < j - i + 1) {
                map[string[i]]--;
                if (map[string[i]] === 0) delete map[string[i]];
                i++;
            }
            j++;
        }
    }
    return max;
}

console.log(longestSubstringNoRepeatChars('aabacbebebe')); // 4
console.log('--------------------------------------');
console.log(longestSubstringNoRepeatChars('aabafggcbebsdebenmk')); // 5
console.log('--------------------------------------');
console.log(longestSubstringNoRepeatChars('aabaccbhbhdebebemlopvzx')); // 9