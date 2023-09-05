class Solution:
    def copyRandomList(self, head: 'Optional[Node]') -> 'Optional[Node]':    
        hash = {None: None}
        cur = head

        while cur:
            hash[cur] = Node(cur.val)
            cur = cur.next
        
        cur = head

        while cur:
            copy = hash[cur]
            copy.next = hash[cur.next]
            copy.random = hash[cur.random]
            cur = cur.next
        
        return hash[head]
