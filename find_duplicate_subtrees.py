# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def findDuplicateSubtrees(self, root: Optional[TreeNode]) -> List[Optional[TreeNode]]:
        res = []
        subtrees = {}

        def traverse(node):
            if not node:
                return "#"
            
            key = "{},{},{}".format(node.val, traverse(node.left), traverse(node.right))

            if key in subtrees:
                subtrees[key].append(node)
            else:
                subtrees[key] = [node]
            
            if len(subtrees[key]) == 2:
                res.append(subtrees[key][0])
            
            return key

        traverse(root)
        return res
