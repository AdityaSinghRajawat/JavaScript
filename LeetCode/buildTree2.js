/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var buildTree = function (inorder, postorder) {

    if (!postorder.length || !inorder.length) return null;

    let rootVal = postorder.pop();
    let root = new TreeNode(rootVal);

    let mid = inorder.indexOf(rootVal);

    root.right = buildTree(inorder.slice(mid + 1), postorder);
    root.left = buildTree(inorder.slice(0, mid), postorder);

    return root;
};

let inorder = [9, 3, 15, 20, 7];
let postorder = [9, 15, 7, 20, 3];
console.log(buildTree(inorder, postorder));
// Output: [3, 9, 20, null, null, 15, 7]