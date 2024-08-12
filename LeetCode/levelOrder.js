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

var levelOrder = function (root) {
    if (!root) return [];

    let result = [];
    let queue = [root];

    while (queue.length > 0) {
        levelSize = queue.length
        let level = [];

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
        result.push(level);
    }

    return result;
};

// var levelOrder = function (root) {

//     let result = [];
//     let queue = [];
//     if (root) queue.push(root);
//     result.push([queue[0].val]);

//     while (queue.length > 0) {
//         let currentNode = queue.shift();
//         let level = [];
//         if (currentNode.left) {
//             queue.push(currentNode.left);
//             level.push(currentNode.left.val);
//         }
//         if (currentNode.right) {
//             queue.push(currentNode.right);
//             level.push(currentNode.right.val);
//         }

//         if (level.length > 0) {
//             result.push(level);
//         }
//     }

//     return result;
// };

let root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);
console.log(levelOrder(root));