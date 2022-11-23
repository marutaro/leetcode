# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def rotateRight(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:

        if not head:
            return head

        length = 1
        dummy = head

        while dummy.next:
            dummy = dummy.next
            length += 1

        position = k % length
        if position == 0:
            return head

        cur = head

        for _ in range(length - position - 1):
            cur = cur.next

        new_head = cur.next
        cur.next = None
        dummy.next = head

        return new_head
