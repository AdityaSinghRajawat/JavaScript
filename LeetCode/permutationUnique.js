/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    let result = [];
     nums.sort((a, b) => a - b);
    let used = new Array(nums.length).fill(false);

    function backtrack(arr) {
        if (nums.length === arr.length) {
            result.push([...arr]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {

            if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;

            if (!used[i]) {
                used[i] = true;
                arr.push(nums[i]);
                backtrack(arr);
                arr.pop();
                used[i] = false;
            }
        }
    }

    backtrack([]);

    return result;
};

// Test cases
console.log(permuteUnique([1, 1, 2]));