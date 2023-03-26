# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def findFrequentTreeSum(self, root: Optional[TreeNode]) -> List[int]:
        freq = {}

        def dfs(node):
            if not node:
                return 0
            
            # calculate the subtree sum recursively
            left_sum = dfs(node.left)
            right_sum = dfs(node.right)

            subtree_sum = left_sum + right_sum + node.val
            # increment the frequency of the subtree sum
            freq[subtree_sum] = 1 + freq.get(subtree_sum, 0)
            
            return subtree_sum

        dfs(root)

        max_freq = max(freq.values())
        return [s for s, f in freq.items() if f == max_freq]
