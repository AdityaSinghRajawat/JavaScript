
// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function GCD(a, b) {
    return b ? GCD(b, a % b) : a;
}

var insertGreatestCommonDivisors = function (head) {

    let currentNode = head;

    while (currentNode && currentNode.next) {

        let gcdValue = GCD(currentNode.val, currentNode.next.val)
        let newNode = new ListNode(gcdValue);

        newNode.next = currentNode.next;
        currentNode.next = newNode;

        currentNode = newNode.next;
    }
    return head;
};

// Test Cases
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(4);
head.next.next.next.next.next = new ListNode(6);
console.log(insertGreatestCommonDivisors(head)); 