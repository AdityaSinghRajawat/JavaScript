/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var zigzagLevelOrder = function (root) {
    if (!root) return [];

    let result = [];
    let queue = [root];
    let count = 0

    while (queue.length > 0) {
        levelSize = queue.length
        let level = [];
        count++;

        for (let i = 0; i < levelSize; i++) {

            let currentNode = queue.shift();
            level.push(currentNode.val);

            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
        if (count % 2 === 0) {
            result.push(level.reverse());
        } else {
            result.push(level);
        }
    }

    return result;
};

let root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log(zigzagLevelOrder(root)); // Output: [[3], [20, 9], [15, 7]]