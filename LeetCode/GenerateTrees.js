/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
    if (n === 0) return [];
    return generateSubtrees(1, n);
};

function generateSubtrees(start, end) {
    let result = [];
    if (start > end) {
        result.push(null);
        return result;
    }

    for (let i = start; i <= end; i++) {
        const leftSubtrees = generateSubtrees(start, i - 1)
        const rightSubtrees = generateSubtrees(i + 1, end)

        for (let left of leftSubtrees) {
            for (let right of rightSubtrees) {
                const root = new TreeNode(i);
                root.left = left;
                root.right = right;
                result.push(root);
            }
        }
    }

    return result;

}
