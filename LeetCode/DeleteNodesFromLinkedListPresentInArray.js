
//Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */

var modifiedList = function (nums, head) {

    let dummy = new ListNode();
    dummy.next = head;
    let currentNode = dummy;

    let deleteSet = new Set(nums);

    while (currentNode.next) {

        if (deleteSet.has(currentNode.next.val)) {
            currentNode.next = currentNode.next.next;
        } else {
            currentNode = currentNode.next;
        }
    }
    return dummy.next;
};

// Test cases
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
head.next.next.next.next.next = new ListNode(6);
head.next.next.next.next.next.next = new ListNode(7);
head.next.next.next.next.next.next.next = new ListNode(8);
head.next.next.next.next.next.next.next.next = new ListNode(9);
head.next.next.next.next.next.next.next.next.next = new ListNode(10);
console.log(modifiedList([3, 4, 5, 6], head)); // 1 -> 2 -> 7 -> 8 -> 9 -> 10