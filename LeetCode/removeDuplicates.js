var removeDuplicates = function (nums) {
    if (nums.length === 0) return 0;

    j = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[j]) {
            j++;
            nums[j] = nums[i];
        }
    }
    return j + 1;
}

nums = [1, 1, 2, 2, 3, 4, 5, 6];
console.log(removeDuplicates(nums));