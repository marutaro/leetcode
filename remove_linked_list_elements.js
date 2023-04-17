/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let ans = new ListNode(0, head);
    let dummy = ans;

    while (dummy) {
        while (dummy.next && dummy.next.val === val) {
            dummy.next = dummy.next.next;
        }
        dummy = dummy.next;
    }

    return ans.next;    
};
