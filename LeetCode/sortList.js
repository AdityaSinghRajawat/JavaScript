/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.next = (next === undefined ? null : next)
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

// var sortList = function (head) {
//     if (!head || !head.next) return head;

//     let sorted = false;

//     while (!sorted) {
//         sorted = true;
//         let currentNode = head;

//         while (currentNode && currentNode.next) {
//             if (currentNode.val > currentNode.next.val) {
//                 let temp = currentNode.val;
//                 currentNode.val = currentNode.next.val;
//                 currentNode.next.val = temp;
//                 sorted = false;
//             }
//             currentNode = currentNode.next;
//         }
//     }

//     return head;
// };

var sortList = function (head) {
    if (!head || !head.next) return head;

    // Step 1: Split the list into halves
    let slow = head, fast = head, prev = null;
    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    prev.next = null; // break the list into two halves

    // Step 2: Sort each half
    let left = sortList(head);
    let right = sortList(slow);

    // Step 3: Merge the sorted halves
    return merge(left, right);
};

function merge(l1, l2) {
    let dummy = new ListNode();
    let current = dummy;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }

    current.next = l1 || l2;

    return dummy.next;
}

// Example usage:
let head = new ListNode(4);
head.next = new ListNode(2);
head.next.next = new ListNode(1);
head.next.next.next = new ListNode(3);
sortList(head);
console.log(head);
