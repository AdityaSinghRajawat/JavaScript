/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
    if (n === 0) return 0;

    // Create an array to store the number of unique BSTs for each count of nodes
    let dp = new Array(n + 1).fill(0);

    // Base cases
    dp[0] = 1; // There is one unique BST with 0 nodes (an empty tree)
    dp[1] = 1; // There is one unique BST with 1 node

    // Fill the dp array
    for (let nodes = 2; nodes <= n; nodes++) {
        for (let root = 1; root <= nodes; root++) {
            let left = root - 1;
            let right = nodes - root;
            dp[nodes] += dp[left] * dp[right];
        }
    }

    return dp[n];
};

// Example usage:
console.log(numTrees(3)); // Output: 5
console.log(numTrees(1)); // Output: 1
console.log(numTrees(0)); // Output: 0
console.log(numTrees(4)); // Output: 14
