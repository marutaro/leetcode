# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def zigzagLevelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if not root:
            return []
        
        res = []
        queue = deque([root])
        is_left = True

        while queue:
            level_size = len(queue)
            level = [0] * level_size

            for i in range(level_size):
                node = queue.popleft()
                index = i if is_left else level_size - i - 1
                level[index] = node.val

                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
            
            res.append(level)
            is_left = not is_left
        
        return res
