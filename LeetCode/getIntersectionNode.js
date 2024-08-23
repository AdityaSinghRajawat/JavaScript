/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var getIntersectionNode = function (headA, headB) {

    if (!headA || !headB) return null;

    let currentA = headA;
    let currentB = headB;

    while (currentA !== currentB) {
        currentA = currentA ? currentA.next : headB
        currentB = currentB ? currentB.next : headA
    }

    return currentA;
};

let headA = new ListNode(4);
headA.next = new ListNode(1);
headA.next.next = new ListNode(8);
headA.next.next.next = new ListNode(4);
headA.next.next.next.next = new ListNode(5);
headA.next.next.next.next.next = new ListNode(5);


let headB = new ListNode(5);
headB.next = new ListNode(0);
headB.next.next = new ListNode(1);
headB.next.next.next = headA.next.next.next;
headB.next.next.next.next = new ListNode(4);
headB.next.next.next.next.next = new ListNode(5);

console.log(getIntersectionNode(headA, headB));