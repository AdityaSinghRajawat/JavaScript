var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    let result = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;  // Skip same result
        let left = i + 1, right = nums.length - 1;

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if (sum < 0) {
                left++;
            } else if (sum > 0) {
                right--;
            } else {
                result.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++;  // Skip same result
                while (left < right && nums[right] === nums[right - 1]) right--;  // Skip same result
                left++;
                right--;
            }
        }
    }

    return result;
};

let nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));  // Output: [[-1, -1, 2], [-1, 0, 1]]