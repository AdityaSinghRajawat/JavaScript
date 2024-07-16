var searchInsert = function (nums, target) {
    let start = 0, end = nums.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (nums[mid] === target) return mid;
        if (nums[mid] < target) start = mid + 1;
        else end = mid - 1;
    }
    return start;
};

let nums = [1, 3, 5, 6];
let target = 5;

console.log(searchInsert(nums, target));  // Output: 2