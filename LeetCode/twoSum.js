var twoSum = function (nums, target) {
    for (let i = 0; i <= nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            if (i == j) {
                j++
            } else {
                if (nums[i] + nums[j] == target) {
                    let res = [i, j]
                    return res
                }
            }
        }
    }
};

let nums = [3, 6, 3, 5, 6, 3]
let target = 8

console.log(twoSum(nums, target))