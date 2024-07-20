/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

var removeNthFromEnd = function (head, n) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let first = dummy;
    let second = dummy;

    // Advances first pointer so that the gap between first and second is n nodes apart
    for (let i = 1; i <= n + 1; i++) {
        first = first.next;
    }

    // Move first to the end, maintaining the gap
    while (first !== null) {
        first = first.next;
        second = second.next;
    }

    // Skip the desired node
    second.next = second.next.next;
    return dummy.next;
};

// Example usage with a linked list instead of an array
let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
let n = 2;

// Function to print linked list
function printList(head) {
    let arr = [];
    while (head !== null) {
        arr.push(head.val);
        head = head.next;
    }
    console.log(arr.join(" -> "));
}

printList(removeNthFromEnd(head, n));