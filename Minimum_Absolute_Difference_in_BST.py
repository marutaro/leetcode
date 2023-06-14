# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def getMinimumDifference(self, root: Optional[TreeNode]) -> int:

        def inorder(node):
            nonlocal min_diff, prev_val

            if node.left:
                inorder(node.left)
            
            if prev_val is not None:
                min_diff = min(min_diff, node.val - prev_val)
            prev_val = node.val

            if node.right:
                inorder(node.right)

        min_diff = float("inf")
        prev_val = None
        inorder(root)
        return min_diff
