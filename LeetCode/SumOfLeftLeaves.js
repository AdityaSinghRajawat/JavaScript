
// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {

    if (!root) return 0;

    let queue = [root];
    let sum = 0;

    while (queue.length > 0) {
        let current = queue.shift();

        if (current.left) {
            if (!current.left.left && !current.left.right) {
                sum += current.left.val; // Add the value of the left leaf
            } else {
                queue.push(current.left); // Add left node to the queue if it's not a leaf
            }
        }

        if (current.right) {
            queue.push(current.right)
        }
    }
    return sum;
};

// Test Cases
let root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);
console.log(sumOfLeftLeaves(root)); // Output: 24

