/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
    function countSubarraysWithSumAtMost(goal) {
        if (goal < 0) return 0;

        let start = 0, sum = 0, count = 0;
        for (let end = 0; end < nums.length; end++) {
            sum += nums[end];

            while (sum > goal) {
                sum -= nums[start];
                start++;
            }

            count += end - start + 1;
        }

        return count;
    }

    return countSubarraysWithSumAtMost(goal) - countSubarraysWithSumAtMost(goal - 1);
};

// Test cases
console.log(numSubarraysWithSum([1, 0, 1, 0, 1], 2)); // Output: 4
console.log(numSubarraysWithSum([0, 0, 0, 0, 0], 0)); // Output: 15
console.log(numSubarraysWithSum([1, 1, 1, 1, 1], 3)); // Output: 3
console.log(numSubarraysWithSum([0, 1, 0, 1, 0], 1)); // Output: 6
console.log(numSubarraysWithSum([0, 0, 0, 0, 0, 0, 1, 0, 0, 0], 0)); // Output: 27
