# Solution 1
class Solution:
    def findBottomLeftValue(self, root: Optional[TreeNode]) -> int:
        q = deque()
        q.append(root)
        res = root.val

        while q:
            res = q[0].val
            for _ in range(len(q)):
                node = q.popleft()
                if node.left:
                    q.append(node.left)
                if node.right:
                    q.append(node.right)
        
        return res
      
# Solution 2
class Solution:
    def findBottomLeftValue(self, root: Optional[TreeNode]) -> int:
        q = deque()
        q.append(root)
        res = root.val

        while q:
            node = q.popleft()
            res = node.val
            if node.right:
                q.append(node.right)
            if node.left:
                q.append(node.left)

        return res

# Solution 3
class Solution:
    def findBottomLeftValue(self, root: Optional[TreeNode]) -> int:
        max_depth = 0
        res = None

        def dfs(node, depth):
            if not node:
                return
            
            nonlocal max_depth, res

            if depth > max_depth:
                max_depth = depth
                res = node.val
            
            dfs(node.left, depth + 1)
            dfs(node.right, depth + 1)

        dfs(root, 1)
        return res
