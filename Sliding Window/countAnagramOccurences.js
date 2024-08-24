
let countAnagramOccurences = (string, pattern) => {

    let i = 0, j = 0;
    let k = pattern.length;

    let map = {};

    for (let p of pattern) {
        map[p] = map[p] ? map[p] + 1 : 1;
    }
    let count = Object.keys(map).length;;

    let anagramCount = 0;

    while (j < string.length) {
        if (map[string[j]] !== undefined) {
            map[string[j]]--;
            if (map[string[j]] === 0) count--;
        }

        if (j - i + 1 < k) {
            j++
        } else if (j - i + 1 === k) {
            if (count === 0) anagramCount++;

            if (map[string[i]] !== undefined) {
                if (map[string[i]] === 0) count++;
                map[string[i]]++;
            }
            i++;
            j++;
        }
    }
    return anagramCount;
}

console.log(countAnagramOccurences('forxxorfxdofr', 'for')); // 3
console.log(countAnagramOccurences('aabaabaa', 'aaba')); // 4
console.log(countAnagramOccurences('aabaabaa', 'aa')); // 5