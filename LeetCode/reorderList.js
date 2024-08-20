/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.next = (next === undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

var reorderList = function (head) {
    if (!head) return;

    let arr = [];
    let currentNode = head;

    // Store all nodes in an array
    while (currentNode) {
        arr.push(currentNode);
        currentNode = currentNode.next;
    }

    let i = 0;
    let j = arr.length - 1;

    // Reorder the list by interleaving nodes from the start and end of the array
    while (i < j) {
        arr[i].next = arr[j];
        i++;
        if (i === j) break;
        arr[j].next = arr[i];
        j--;
    }

    // Set the next of the last node to null to avoid a cycle
    arr[i].next = null;
};

// Example usage:
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
console.log(head);
reorderList(head);
console.log(head);

