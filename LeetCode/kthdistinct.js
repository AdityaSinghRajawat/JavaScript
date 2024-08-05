/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function (arr, k) {
    let obj = {}
    let result = []
    for (let ele of arr) {
        obj[ele] = obj[ele] ? obj[ele] + 1 : 1;
    }

    for (let ele of arr) {
        if (obj[ele] === 1) {
            result.push(ele);
        }
    }

    if (result.length < k) {
        return "";
    }

    return result[k - 1]

};

let arr = ["a", "b", "a"];
let k = 3;
console.log(kthDistinct(arr, k));

arr = ["d", "b", "c", "b", "c", "a"];
k = 2;
console.log(kthDistinct(arr, k)); 
