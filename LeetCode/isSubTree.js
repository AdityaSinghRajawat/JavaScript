
//  Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */

function isSameTree(s, t) {
    if (!s && !t) return true;
    if (!s || !t) return false;

    if (s.val !== t.val) return false;

    return isSameTree(s.left, t.left) && isSameTree(s.right, t.right);
}

var isSubtree = function (root, subRoot) {

    if (!root) return false;

    if (isSameTree(root, subRoot)) return true;

    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

// Test cases
let root = new TreeNode(3);
root.left = new TreeNode(4);
root.right = new TreeNode(5);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(2);
root.right.right = new TreeNode(5);
let subRoot = new TreeNode(4);
subRoot.left = new TreeNode(1);
subRoot.right = new TreeNode(2);
console.log(isSubtree(root, subRoot)); // true
