/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {

    let map = {};
    let max = 0;

    for (let ele of nums) {
        map[ele] = map[ele] ? map[ele] + 1 : 1;
    }

    for (let key in map) {

        if (map[String(Number(key) + 1)] !== undefined) {

            let harmoniusLength = map[key] + map[String(Number(key) + 1)];

            max = Math.max(max, harmoniusLength);
        }
    }
    return max;
};

console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7])); // 5
console.log(findLHS([1, 2, 3, 4])); // 2
console.log(findLHS([1, 1, 1, 1])); // 0
