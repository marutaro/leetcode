# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def longestZigZag(self, root: Optional[TreeNode]) -> int:

        if not root:
            return 0
        
        max_length = 0

        def dfs(node, is_left, length):
            nonlocal max_length

            if not node:
                return
            
            max_length = max(max_length, length)

            if is_left:
                dfs(node.left, False, length + 1)
                dfs(node.right, True, 1)
            else:
                dfs(node.right, True, length + 1)
                dfs(node.left, False, 1)                

        dfs(root, True, 0)
        return max_length
