/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {

    let low = 0, high = nums.length - 1;
    let mid = 0;

    while (mid <= high) {

        if (nums[mid] === 0) {
            [nums[mid], nums[low]] = [nums[low], nums[mid]];
            low++;
            mid++;
        } else if (nums[mid] === 1) {
            mid++;
        } else if (nums[mid] === 2) {
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }
};

let nums = [2, 0, 2, 1, 1, 0];
sortColors(nums);
console.log(nums); // Output: [0,0,1,1,2,2]

nums = [2, 0, 1];
sortColors(nums);
console.log(nums); // Output: [0,1,2]