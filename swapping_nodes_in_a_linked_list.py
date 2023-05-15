# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def swapNodes(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        dummy = head
		
        for _ in range(k - 1):
            dummy = dummy.next
        first = dummy

        second = head 
        while dummy.next:
            dummy = dummy.next
            second = second.next
		
        first.val, second.val = second.val, first.val

        return head
