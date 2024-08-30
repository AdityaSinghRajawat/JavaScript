/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {

    let i = 0, j = 0;
    let set = new Set();

    while (j < nums.length) {

        if (j - i > k) {
            set.delete(nums[i]);
            i++;
        }

        if (set.has(nums[j])) {
            return true;
        }

        set.add(nums[j]);
        j++;
    }
    return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)); // true
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1)); // true
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)); // false