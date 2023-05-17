# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def pairSum(self, head: Optional[ListNode]) -> int:

        slow = head
        fast = head

        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
        
        second = None

        while slow:
            temp = slow.next
            slow.next = second
            second = slow
            slow = temp
        
        res = 0
        while second:
            res = max(res, head.val + second.val)
            head = head.next
            second = second.next
        
        return res
