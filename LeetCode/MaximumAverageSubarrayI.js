/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {

    let i = 0, j = 0;
    let max = -Infinity;
    let sum = 0;

    while (j < nums.length) {

        sum += nums[j];

        if (j - i + 1 < k) {
            j++;

        } else if (j - i + 1 === k) {
            let average = sum / k;
            max = Math.max(max, average);

            sum -= nums[i];
            i++;
            j++;
        }
    }
    return max;
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4)); // 12.75
console.log(findMaxAverage([5], 1)); // 5
console.log(findMaxAverage([0, 4, 0, 3, 2], 1)); // 4
console.log(findMaxAverage([0, 1, 1, 3, 3], 4)); // 2