
//   Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {

    if (!root) return [];

    let queue = [root];
    let result = [];

    while (queue.length > 0) {
        maxLen = queue.length;
        let level = [];

        for (let i = 0; i < maxLen; i++) {
            let currentNode = queue.shift();
            level.push(currentNode.val);

            if (currentNode.left) {
                queue.push(currentNode.left);
            }

            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
        result[result.length] = level;;
    }
    return result.reverse();
};

// Test cases
let root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);
console.log(levelOrderBottom(root)); // Output: [[15, 7], [9, 20], [3]]
