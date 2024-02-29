# BFS
class Solution:
    def isEvenOddTree(self, root: Optional[TreeNode]) -> bool:
        q = deque()
        q.append((root, 0))

        while q:
            prev = None
            for _ in range(len(q)):
                node, level = q.popleft()
                if level % 2 == 0:
                    if node.val % 2 == 0:
                        return False
                    if prev and prev >= node.val:
                        return False
                else:
                    if node.val % 2 == 1:
                        return False
                    if prev and prev <= node.val:
                        return False
                
                prev = node.val

                if node.left:
                    q.append((node.left, level + 1))
                if node.right:
                    q.append((node.right, level + 1))

        return True                    

# DFS
class Solution:
    def isEvenOddTree(self, root: Optional[TreeNode]) -> bool:
        prev = []

        def dfs(node, level):
            if not node:
                return True
            
            if len(prev) <= level:
                prev.append(0)
            
            if level % 2 == 0:
                if node.val % 2 == 0 or (prev[level] and prev[level] >= node.val):
                    return False
            else:
                if node.val % 2 == 1 or (prev[level] and prev[level] <= node.val):
                    return False
            
            prev[level] = node.val

            is_left_valid = dfs(node.left, level + 1)
            is_right_valid = dfs(node.right, level + 1)

            return is_left_valid and is_right_valid

        return dfs(root, 0)
