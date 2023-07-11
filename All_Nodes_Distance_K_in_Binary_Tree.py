# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def distanceK(self, root: TreeNode, target: TreeNode, k: int) -> List[int]:
        neighbors = defaultdict(list)

        def build_neighbors(node, parent):
            if not node: return

            if parent:
                neighbors[node].append(parent)
                neighbors[parent].append(node)
            
            build_neighbors(node.left, node)
            build_neighbors(node.right, node)

        build_neighbors(root, None)

        queue = deque()
        visited = set()
        res = []

        queue.append((target, 0))
        visited.add(target)

        while queue:
            node, dis = queue.popleft()

            if dis == k:
                res.append(node.val)
            
            if dis > k: break

            for nei in neighbors[node]:
                if nei not in visited:
                    visited.add(nei)
                    queue.append((nei, dis + 1))
        
        return res
