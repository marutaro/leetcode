# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def widthOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0
        
        max_width = 1
        queue = deque([(root, 0)])

        while queue:
            level_size = len(queue)
            _, left_idx = queue[0]
            _, right_idx = queue[-1]

            width = right_idx - left_idx + 1
            max_width = max(max_width, width)

            for _ in range(level_size):
                node, idx = queue.popleft()

                if node.left:
                    queue.append((node.left, 2 * idx + 1))
                if node.right:
                    queue.append((node.right, 2 * idx + 2))
        
        return max_width
