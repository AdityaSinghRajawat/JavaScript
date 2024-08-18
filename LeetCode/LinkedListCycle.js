/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var hasCycle = function (head) {
    let currentNode = head;
    let visitedNodes = new Set();

    while (currentNode) {
        if (visitedNodes.has(currentNode)) {
            return true; // Cycle detected
        }
        visitedNodes.add(currentNode);
        currentNode = currentNode.next;
    }

    return false;
};

let head = new ListNode(3);
head.next = new ListNode(2);
head.next.next = new ListNode(0);
head.next.next.next = new ListNode(-4);
head.next.next.next.next = head.next;
console.log(hasCycle(head)); // Output: true