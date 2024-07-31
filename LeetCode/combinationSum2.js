/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    // Sort candidates to help handle duplicates
    candidates.sort((a, b) => a - b);
    const result = [];

    const backtrack = (remain, comb, start) => {
        if (remain === 0) {
            result.push([...comb]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            // Skip duplicates
            if (i > start && candidates[i] === candidates[i - 1]) continue;

            if (candidates[i] > remain) break; // No need to continue if the current candidate exceeds the remaining target

            comb.push(candidates[i]);
            backtrack(remain - candidates[i], comb, i + 1); // Move to the next index for next candidate
            comb.pop(); // Backtrack
        }
    }

    backtrack(target, [], 0);
    return result;
};

// Test cases
console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
// Output: [[1,1,6],[1,2,5],[1,7],[2,6]]

console.log(combinationSum2([2, 5, 2, 1, 2], 5));
// Output: [[1,2,2],[5]]
