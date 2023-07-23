# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def allPossibleFBT(self, n: int) -> List[Optional[TreeNode]]:
        if n % 2 == 0:
            return []
        
        memo = {}

        def generateFBT(n):
            if n == 1:
                return [TreeNode(0)]
            
            if n in memo:
                return memo[n]
            
            trees = []
            for left in range(1, n, 2):
                left_subtrees = generateFBT(left)
                right_subtrees = generateFBT(n - left - 1)

                for l in left_subtrees:
                    for r in right_subtrees:
                        root = TreeNode(0, l, r)
                        trees.append(root)
            
            memo[n] = trees
            return trees

        return generateFBT(n)
