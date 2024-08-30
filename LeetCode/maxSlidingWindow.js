/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {

    let i = 0, j = 0;
    let result = [];
    let max = [];

    while (j < nums.length) {

        while (max[max.length - 1] < nums[j]) {
            max.pop();
        }
        max.push(nums[j]);

        if (j - i + 1 < k) {
            j++
        } else if (j - i + 1 === k) {
            result.push(max[0]);

            if (max[0] === nums[i]) {
                max.shift();
            }
            i++;
            j++;
        }
    }
    return result;
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)); // [3,3,5,5,6,7]
console.log(maxSlidingWindow([1], 1)); // [1]
console.log(maxSlidingWindow([1, -1], 1)); // [1, -1]
console.log(maxSlidingWindow([9, 11], 2)); // [11]