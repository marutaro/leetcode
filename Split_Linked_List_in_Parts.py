# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def splitListToParts(self, head: Optional[ListNode], k: int) -> List[Optional[ListNode]]:
        # step 1
        length = 0
        cur = head
        while cur:
            length += 1
            cur = cur.next
        
        # step 2
        part_size = length // k
        larger_parts = length % k

        res = []

        # step 3
        cur = head
        for i in range(k):
            sublist_size = part_size + 1 if i < larger_parts else part_size
            if sublist_size == 0:
                res.append(None)
            else:
                sublist_head = cur
                for _ in range(sublist_size - 1):
                    cur = cur.next
                
                next_node = cur.next
                cur.next = None
                res.append(sublist_head)
                cur = next_node
        
        return res
