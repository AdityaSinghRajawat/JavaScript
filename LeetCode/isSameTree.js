/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var isSameTree = function (p, q) {

    function preOrder(node1, node2) {

        if (!node1 && !node2) return true;

        if (!node1 || !node2) return false;

        if (node1.val !== node2.val) return false;

        return preOrder(node1.left, node2.left) && preOrder(node1.right, node2.right);
    }
    return preOrder(p, q);
};

let p = new TreeNode(1);
p.left = new TreeNode(2);
p.right = new TreeNode(3);

let q = new TreeNode(1);
q.left = new TreeNode(2);
q.right = new TreeNode(3);

console.log(isSameTree(p, q)); // true