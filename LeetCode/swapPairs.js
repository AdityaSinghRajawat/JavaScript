/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var swapPairs = function (head) {

    if (!head || !head.next) return head;

    let dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;

    while (head && head.next) {
        let first = head;
        let second = head.next;

        first.next = second.next;
        second.next = first;
        prev.next = second;

        prev = first;
        head = first.next
    }

    return dummy.next;

};

let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, null))));
console.log(swapPairs(head)); 