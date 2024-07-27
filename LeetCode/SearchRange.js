/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    const findLeft = (nums, target) => {
        let left = 0;
        let right = nums.length - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return left;
    };

    const findRight = (nums, target) => {
        let left = 0;
        let right = nums.length - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] <= target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return right;
    };

    let leftIndex = findLeft(nums, target);
    let rightIndex = findRight(nums, target);

    // Check if the target is not present
    if (leftIndex <= rightIndex && rightIndex < nums.length && nums[leftIndex] === target && nums[rightIndex] === target) {
        return [leftIndex, rightIndex];
    }
    return [-1, -1];
};


let arr = [5, 7, 7, 8, 8, 10]
let ele = 8;
console.log(searchRange(arr, ele)); // Output: [3, 4]