/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let slist = new ListNode();
    let blist = new ListNode();
    let small = slist;
    let big = blist;

    while (head !== null) {
        if (head.val < x) {
            small.next = head;
            small = small.next;
        } else {
            big.next = head;
            big = big.next;
        }

        head = head.next;
    }

    small.next = blist.next;
    big.next = null;

    return slist.next;    
};
