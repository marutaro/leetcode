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
var swapNodes = function(head, k) {
    let dummy = head;
  
    for (let i = 0; i < k - 1; i++) {
        dummy = dummy.next;
    }
    let first = dummy;
  
    let second = head;
    while (dummy.next) {
        dummy = dummy.next;
        second = second.next;
    }
  
    [first.val, second.val] = [second.val, first.val];
  
    return head;    
};
