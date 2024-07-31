/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {

    nums.sort((a, b) => a - b);

    let missing = 1;
    for (let num of nums) {
        if (num === missing) {
            missing++;
        }
    }

    return missing;
};

// Test cases
console.log(firstMissingPositive([1, 2, 0])); // Output: 3
console.log(firstMissingPositive([3, 4, -1, 1])); // Output: 2
console.log(firstMissingPositive([7, 8, 9, 11, 12])); // Output: 1