# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        
        node = ListNode()
        ans = node
        
        total = carry = 0
        
        while l1 or l2:
            total = carry
            
            if l1:
                total += l1.val
                l1 = l1.next
            if l2:
                total += l2.val
                l2 = l2.next
            
            num = total % 10
            carry = total // 10
            node.next = ListNode(num)
            node = node.next
        
        if carry > 0:
            node.next = ListNode(carry)
        
        return ans.next
        
        
