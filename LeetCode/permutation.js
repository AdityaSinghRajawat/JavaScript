/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let result = [];

    function backtrack(start, arr) {
        if (start === arr.length) {
            result.push([...arr]);
            return;
        }

        for (let i = start; i < arr.length; i++) {
            [arr[i], arr[start]] = [arr[start], arr[i]];
            backtrack(start + 1, arr);
            [arr[i], arr[start]] = [arr[start], arr[i]];
        }
    }

    backtrack(0, nums);

    return result;
};

// Test cases

console.log(permute([1, 2, 3]));