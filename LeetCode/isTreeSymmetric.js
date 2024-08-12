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
 * @return {boolean}
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var isSymmetric = function (root) {

    if (!root) return true;

    function isMirror(left, right) {
        if (!left && !right) return true;
        if (!left || !right) return false;

        return (left.val === right.val) && isMirror(left.left, right.right) && isMirror(left.right, right.left);
    }

    return isMirror(root.left, root.right);

    // function inorderLeft(node, result) {
    //     if (node) {
    //         inorderLeft(node.left, result);
    //         result.push(node.val);
    //         inorderLeft(node.right, result);
    //     }
    //     return result;
    // }

    // function inorderRight(node, result) {
    //     if (node) {
    //         inorderRight(node.right, result);
    //         result.push(node.val);
    //         inorderRight(node.left, result);
    //     }
    //     return result;
    // }

    // let resultLeft = inorderLeft(root.left, []);
    // let resultRight = inorderRight(root.right, []);

    // return JSON.stringify(resultLeft) === JSON.stringify(resultRight);

};

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(2);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(4);
root.right.left = new TreeNode(4);
root.right.right = new TreeNode(3);

console.log(isSymmetric(root));

root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(2);
root.left.right = new TreeNode(3);
root.right.right = new TreeNode(3);

console.log(isSymmetric(root));



