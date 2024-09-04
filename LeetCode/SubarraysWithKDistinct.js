/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function (nums, k) {
    function atMostKDistinct(nums, k) {
        let i = 0, j = 0;
        let map = new Map();
        let count = 0;

        while (j < nums.length) {
            if (!map.has(nums[j])) {
                map.set(nums[j], 1);
            } else {
                map.set(nums[j], map.get(nums[j]) + 1);
            }

            while (map.size > k) {
                map.set(nums[i], map.get(nums[i]) - 1);
                if (map.get(nums[i]) === 0) {
                    map.delete(nums[i]);
                }
                i++;
            }

            count += j - i + 1;
            j++;
        }
        return count;
    }

    return atMostKDistinct(nums, k) - atMostKDistinct(nums, k - 1);
};

// Test cases
console.log(subarraysWithKDistinct([1, 2, 1, 2, 3], 2)); // Output: 7
console.log(subarraysWithKDistinct([1, 2, 1, 3, 4], 3)); // Output: 3
console.log(subarraysWithKDistinct([1, 2, 1, 3, 4], 4)); // Output: 2