/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode swapNodes(ListNode head, int k) {
        ListNode dummy = head;

        for (int i = 0; i < k - 1; i++) {
            dummy = dummy.next;
        }
        ListNode first = dummy;

        ListNode second = head;
        while (dummy.next != null) {
            dummy = dummy.next;
            second = second.next;
        }

        int temp = first.val;
        first.val = second.val;
        second.val = temp;

        return head;        
    }
}
