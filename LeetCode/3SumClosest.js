/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {

    nums.sort((a, b) => a - b)
    let closest = nums[0] + nums[1] + nums[2]

    for (let i = 0; i < nums.length - 2; i++) {
        let left = 0, right = nums.length - 1;

        while (left < right) {
            if (left == i) {
                left++
                continue;
            }

            if (right == i) {
                right--
                continue;
            }

            let sum = nums[i] + nums[left] + nums[right];

            if (sum === target) {
                return sum;
            }

            if (Math.abs(sum - target) < Math.abs(closest - target)) {
                closest = sum;
            }

            if (sum < target) {
                left++
            } else {
                right--;
            }
        }

    };
    return closest;
}