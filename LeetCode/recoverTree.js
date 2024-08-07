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

var recoverTree = function (root) {
    let first = null, second = null;
    let prev = new TreeNode(-Infinity);

    const inorder = (node) => {
        if (!node) return;

        inorder(node.left);

        if (prev.val > node.val) {
            if (!first) {
                first = prev;
            }
            second = node;
        }
        prev = node;

        inorder(node.right);
    }
    inorder(root);

    if (first && second) {
        [first.val, second.val] = [second.val, first.val];
    }
};


let root = new TreeNode(1);
root.left = new TreeNode(3);
root.left.right = new TreeNode(2);

console.log(root);
recoverTree(root);
console.log(root);
