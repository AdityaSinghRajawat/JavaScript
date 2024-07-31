/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    const result = [];

    const backtrack = (remain, comb, start) => {
        if (remain === 0) {
            // If we hit the target, add the combination to the result
            result.push([...comb]);
            return;
        } else if (remain < 0) {
            // If the remaining sum becomes negative, stop exploring further
            return;
        }

        // Explore the candidates starting from the current index to avoid duplicates
        for (let i = start; i < candidates.length; i++) {
            comb.push(candidates[i]);
            backtrack(remain - candidates[i], comb, i); // Since we can reuse the same number, `i` is passed
            comb.pop(); // Backtrack and try the next candidate
        }
    }

    backtrack(target, [], 0);
    return result;
};

// Test cases
console.log(combinationSum([2, 3, 6, 7], 7)); // Output: [[2,2,3],[7]]
console.log(combinationSum([2, 3, 5], 8));   // Output: [[2,2,2,2],[2,3,3],[3,5]]
console.log(combinationSum([2], 1));       // Output: []
