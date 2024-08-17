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
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

// function deleteNode(head, index) {
//     if (index <= 0) {
//         return head.next; // Delete the head node
//     }

//     let currentNode = head;
//     for (let i = 0; i < index - 1; i++) {
//         if (currentNode.next === null) {
//             return head; // If index is out of bounds, return original list
//         }
//         currentNode = currentNode.next;
//     }

//     if (currentNode.next !== null) {
//         currentNode.next = currentNode.next.next; // Skip over the node to delete
//     }

//     return head;
// }

// var deleteDuplicates = function (head) {
//     if (!head) return null;

//     let dummy = head;
//     let currentNode = head;
//     let obj = {}
//     let index = 0;

//     while (dummy) {
//         obj[dummy.val] = obj[dummy.val] ? obj[dummy.val] + 1 : 1;
//         dummy = dummy.next;
//     }

//     while (currentNode) {
//         if (obj[currentNode.val] > 1) {
//             head = deleteNode(head, index);
//             index--;
//         }
//         currentNode = currentNode.next;
//         index++;
//     }
//     console.log(obj);

//     return head;
// };

var deleteDuplicates = function (head) {
    if (!head) return null;

    let dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;
    let currentNode = head;

    while (currentNode) {
        if (currentNode.next && currentNode.val === currentNode.next.val) {
            // Skip all nodes with the same value
            while (currentNode.next && currentNode.val === currentNode.next.val) {
                currentNode = currentNode.next;
            }
            // Remove the duplicates
            prev.next = currentNode.next;
        } else {
            prev = prev.next;
        }
        currentNode = currentNode.next;
    }

    return dummy.next;
};

// Example usage:
let head = new ListNode(1);
head.next = new ListNode(1);
head.next.next = new ListNode(1);
head.next.next.next = new ListNode(2);
head.next.next.next.next = new ListNode(3);

console.log(deleteDuplicates(head)); // Output: [2, 3]