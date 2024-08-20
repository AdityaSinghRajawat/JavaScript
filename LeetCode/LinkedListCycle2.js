/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

// var detectCycle = function (head) {
//     let currentNode = head;
//     let visitedNodes = new Set();

//     while (currentNode) {
//         if (visitedNodes.has(currentNode)) {
//             return currentNode; // Cycle detected
//         }
//         visitedNodes.add(currentNode);
//         currentNode = currentNode.next;
//     }

//     return null;
// };

// Time Complexity: O(N)
// Space Complexity: O(N)

// Floyd's Tortoise and Hare Algorithm
// Time Complexity: O(N)
// Space Complexity: O(1)
var detectCycle = function (head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            let slow2 = head;
            while (slow2 !== slow) {
                slow = slow.next;
                slow2 = slow2.next;
            }
            return slow;
        }
    }

    return null;
};

// Test case 1: No cycle
const head1 = new ListNode(1);
head1.next = new ListNode(2);
head1.next.next = new ListNode(3);
head1.next.next.next = new ListNode(4);
console.log(detectCycle(head1)); // Output: null

// Test case 2: Cycle exists
const head2 = new ListNode(1);
head2.next = new ListNode(2);
head2.next.next = new ListNode(3);
head2.next.next.next = new ListNode(4);
head2.next.next.next.next = head2.next;
console.log(detectCycle(head2)); // Output: ListNode { val: 2, next: ListNode { val: 3, next: ListNode { val: 4, next: [Circular] } } }

// Test case 3: Single node with cycle
const head3 = new ListNode(1);
head3.next = head3;
console.log(detectCycle(head3)); // Output: ListNode { val: 1, next: [Circular] }

// Test case 4: Empty list
console.log(detectCycle(null)); // Output: null




