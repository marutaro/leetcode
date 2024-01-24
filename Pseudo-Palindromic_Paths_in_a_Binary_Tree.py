# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def pseudoPalindromicPaths (self, root: Optional[TreeNode]) -> int:

        def dfs(node, pairs):
            if not node:
                return 0
            
            if node.val in pairs:
                pairs.remove(node.val)
            else:
                pairs.add(node.val)
            
            if not node.left and not node.right:
                return 1 if len(pairs) <= 1 else 0
            
            left = dfs(node.left, set(pairs))
            right = dfs(node.right, set(pairs))

            return left + right

        return dfs(root, set())
