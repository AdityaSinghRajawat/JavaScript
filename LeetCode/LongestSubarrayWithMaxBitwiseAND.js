/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
    let maxElement = Math.max(...nums);
    let maxLength = 0;
    let currentLength = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === maxElement) {
            currentLength++;
            maxLength = Math.max(maxLength, currentLength);
        } else {
            currentLength = 0;
        }
    }
    return maxLength;
};

console.log(longestSubarray([8, 2, 4, 7])); // 1
console.log(longestSubarray([10, 1, 2, 4, 7, 2])); // 1
console.log(longestSubarray([4, 2, 2, 2, 4, 4, 2, 2])); // 2
