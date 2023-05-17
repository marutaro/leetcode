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
    public int pairSum(ListNode head) {
        ListNode slow = head;
        ListNode fast = head;

        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        ListNode second = null;

        while (slow != null) {
            ListNode temp = slow.next;
            slow.next = second;
            second = slow;
            slow = temp;
        }

        int res = 0;
        while (second != null) {
            res = Math.max(res, head.val + second.val);
            head = head.next;
            second = second.next;
        }

        return res;        
    }
}
