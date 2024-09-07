
//  Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}


//  Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */

function isPathMatch(head, node) {
    if (!head) return true; // If we've reached the end of the linked list, it's a match.
    if (!node) return false; // If the tree path ends but the list hasn't, it's not a match.

    if (node.val === head.val) {
        return isPathMatch(head.next, node.left) || isPathMatch(head.next, node.right);
    }

    return false; // If values don't match, return false.
}

var isSubPath = function (head, root) {

    if (!root) return false;

    return isPathMatch(head, root) || isSubPath(head, root.left) || isSubPath(head, root.right);
};

// Test cases
let head = new ListNode(4);
head.next = new ListNode(2);
head.next.next = new ListNode(8);

let root = new TreeNode(1);
root.left = new TreeNode(4);
root.left.left = new TreeNode(2);
root.left.left.left = new TreeNode(1);
root.left.right = new TreeNode(2);
root.left.right.left = new TreeNode(4);
root.left.right.right = new TreeNode(8);
root.left.right.left.left = new TreeNode(1);
root.left.right.left.right = new TreeNode(3);
root.right = new TreeNode(4);
root.right.left = new TreeNode(2);
root.right.right = new TreeNode(8);

console.log(isSubPath(head, root)); // true