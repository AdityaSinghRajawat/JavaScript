/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let i = 0, j = 0;
    let sum = 0;
    let minLen = Infinity;

    while (j < nums.length) {
        sum += nums[j];

        if (sum < target) {
            j++;
        } else {
            while (sum >= target) {
                minLen = Math.min(minLen, j - i + 1);
                sum -= nums[i];
                i++;
            }
            j++;
        }
    }
    return minLen === Infinity ? 0 : minLen;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // 2
console.log(minSubArrayLen(4, [1, 4, 4])); // 1
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1])); // 0