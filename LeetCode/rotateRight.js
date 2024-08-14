/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var rotateRight = function (head, k) {
    if (!head || !head.next || k === 0) return head;

    // Calculate the length of the list
    let length = 1;
    let current = head;
    while (current.next) {
        current = current.next;
        length++;
    }

    // Connect the last node to the head to make it circular
    current.next = head;

    // Find the new head and the new tail
    k = k % length; // In case k is greater than the length
    let stepsToNewHead = length - k;
    let newTail = head;
    for (let i = 1; i < stepsToNewHead; i++) {
        newTail = newTail.next;
    }

    let newHead = newTail.next;
    newTail.next = null;

    return newHead;
};

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

console.log(rotateRight(head, 2)); // 4->5->1->2->3
