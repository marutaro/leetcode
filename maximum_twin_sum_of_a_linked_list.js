/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let second = null;

    while (slow) {
        let temp = slow.next;
        slow.next = second;
        second = slow;
        slow = temp;
    }

    let res = 0;
    while (second) {
        res = Math.max(res, head.val + second.val);
        head = head.next;
        second = second.next;
    }

    return res;    
};
