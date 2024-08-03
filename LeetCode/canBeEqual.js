/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function (target, arr) {
    target.sort((a, b) => a - b);
    arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== target[i]) {
            return false;
        }
    }

    return true;
};

// Test cases
console.log(canBeEqual([1, 2, 3, 4], [2, 4, 1, 3])); // Output: true
console.log(canBeEqual([7], [7])); // Output: true
console.log(canBeEqual([1, 12], [12, 1])); // Output: true
console.log(canBeEqual([3, 7, 9], [3, 7, 11])); // Output: false