# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxPathSum(self, root: Optional[TreeNode]) -> int:
        res = root.val

        def dfs(node):
            nonlocal res

            if not node:
                return 0
            
            # recursively compute the maximum sum of the left and right subtree paths
            left_sum = max(0, dfs(node.left))
            right_sum = max(0, dfs(node.right))

            # update the maximum path sum encountered so far(with split)
            res = max(res, left_sum + right_sum + node.val)

            # return the maximum sum of the path(without split)
            return max(left_sum, right_sum) + node.val

        dfs(root)
        return res
