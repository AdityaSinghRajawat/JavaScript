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
 * @return {void} Do not return anything, modify root in-place instead.
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var flatten = function (root) {

    if (!root) return;

    function flattenTree(node) {
        if (!node) return null;

        const leftTree = flattenTree(node.left);
        const rightTree = flattenTree(node.right);

        if (leftTree) {
            leftTree.right = node.right;
            node.right = node.left;
            node.left = null
        }

        return rightTree || leftTree || node;

    }

    flattenTree(root);

};

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(5);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(4);
root.right.right = new TreeNode(6);
console.log(root);
flatten(root);
console.log(root);

