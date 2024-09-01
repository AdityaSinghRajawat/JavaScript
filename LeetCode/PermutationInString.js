/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    let i = 0, j = 0;
    let map = {};

    for (let c of s1) {
        map[c] = map[c] ? map[c] + 1 : 1;
    }

    let count = Object.keys(map).length;

    while (j < s2.length) {

        if (map[s2[j]] !== undefined) {
            map[s2[j]]--;
            if (map[s2[j]] === 0) count--;
        }

        if (j - i + 1 < s1.length) {
            j++;
        } else if (j - i + 1 === s1.length) {

            if (count === 0) {
                return true;
            }

            if (map[[s2[i]]] !== undefined) {
                if (map[[s2[i]]] === 0) count++;
                map[[s2[i]]]++;
            }
            i++;
            j++;
        }
    }
    return false;
};

console.log(checkInclusion('ab', 'eidbaooo')); // true
console.log(checkInclusion('ab', 'eidboaoo')); // false
console.log(checkInclusion('adc', 'dcda')); // true