# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxLevelSum(self, root: Optional[TreeNode]) -> int:
        res = cur_level = 0
        cur_max = float("-inf")
        q = deque([root])

        while q:
            cur_total = 0
            cur_level += 1

            for _ in range(len(q)):
                node = q.popleft()
                cur_total += node.val

                if node.left:
                    q.append(node.left)
                if node.right:
                    q.append(node.right)

            if cur_total > cur_max:
                res = cur_level
                cur_max = cur_total
 
        return res
