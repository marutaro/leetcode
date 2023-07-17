/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let stack1 = [];
    let stack2 = [];

    // Push digits of l1 to stack1
    while (l1) {
        stack1.push(l1.val);
        l1 = l1.next;
    }

    // Push digits of l2 to stack2
    while (l2) {
        stack2.push(l2.val);
        l2 = l2.next;
    }

    let carry = 0;
    let dummyHead = null;

    // Pop digits from both stacks and add them
    while (stack1.length || stack2.length || carry) {
        let val1 = stack1.pop() || 0;
        let val2 = stack2.pop() || 0;

        let total = val1 + val2 + carry;
        carry = Math.floor(total / 10);

        let new_node = new ListNode(total % 10);
        new_node.next = dummyHead;
        dummyHead = new_node;
    }

    return dummyHead;    
};
