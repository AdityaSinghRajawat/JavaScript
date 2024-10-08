
let minimumWindowSubstring = (string, pattern) => {

    let i = 0, j = 0;
    let map = {};
    let minLen = Infinity;
    let minStart = 0;

    for (let p of pattern) {
        map[p] = map[p] ? map[p] + 1 : 1;
    }
    let count = Object.keys(map).length;

    while (j < string.length) {
        if (map[string[j]] !== undefined) {
            map[string[j]]--;
            if (map[string[j]] === 0) count--;
        }

        if (count > 0) {
            j++;
        } else if (count === 0) {

            while (count === 0) {

                if (j - i + 1 < minLen) {
                    minLen = j - i + 1;
                    minStart = i;
                }

                if (map[string[i]] !== undefined) {
                    if (map[string[i]] === 0) count++;
                    map[string[i]]++;
                }
                i++;
            }
            j++;
        }
    }
    return minLen === Infinity ? '' : string.slice(minStart, minStart + minLen);
}

console.log(minimumWindowSubstring('ADOBECODEBANC', 'ABC')); // 4
console.log('--------------------------------------');
console.log(minimumWindowSubstring('a', 'a')); // 1
console.log('--------------------------------------');
console.log(minimumWindowSubstring('a', 'aa')); // ''
console.log('--------------------------------------');
console.log(minimumWindowSubstring('aaabcsd', 'abs')); // 4