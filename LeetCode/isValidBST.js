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

// var isValidBST = function (root) {

//     let queue = [];

//     if (root) queue.push(root);

//     while (queue.length > 0) {
//         currentNode = queue.shift();
//         if (currentNode.left) {
//             if (currentNode.val <= currentNode.left.val) {
//                 return false;
//             }
//         }

//         if (currentNode.right) {
//             if (currentNode.val >= currentNode.right.val) {
//                 return false;
//             }
//         }

//         if (currentNode.left) queue.push(currentNode.left);
//         if (currentNode.right) queue.push(currentNode.right);
//         console.log(currentNode);

//     }

//     return true;

// };

var isValidBST = function (root) {
    let validate = function (node, low, high) {
        if (!node) return true;

        if ((low !== null && node.val <= low) || (high !== null && node.val >= high)) {
            return false;
        }
        return validate(node.left, low, node.val) && validate(node.right, node.val, high)
    }
    return validate(root, null, null);
}

let root = new TreeNode(2);
root.left = new TreeNode(1);
root.right = new TreeNode(3);
console.log(isValidBST(root)); // true

root = new TreeNode(5);
root.left = new TreeNode(1);
root.right = new TreeNode(4);
root.right.left = new TreeNode(3);
root.right.right = new TreeNode(6);
console.log(isValidBST(root)); // false

root = new TreeNode(5);
root.left = new TreeNode(4);
root.right = new TreeNode(6);
root.right.left = new TreeNode(3);
root.right.right = new TreeNode(7);
console.log(isValidBST(root)); // false

