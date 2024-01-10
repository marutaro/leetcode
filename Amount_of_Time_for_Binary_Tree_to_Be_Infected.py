class Solution:
    def amountOfTime(self, root: Optional[TreeNode], start: int) -> int:

        def get_node_relation(root):
            # current: [parent, left, right] basic            
            # current: [left, right] if root
            # current: [parent, left] if no right            
            # current: [parent, right] if no left
            # current: [parent] if leaf            
            relation = collections.defaultdict(list)
            q = collections.deque([(root, 0)])  # (next node, parent(current) value)

            while q:
                node, parent = q.popleft()
                if parent != 0:
                    relation[parent].append(node.val)
                    relation[node.val].append(parent)
                if node.left:
                    q.append((node.left, node.val))
                if node.right:
                    q.append((node.right, node.val))

            return relation        

        minutes = -1
        node_relation = get_node_relation(root)
        q = deque([start]) # next start node value
        visited = {start} # prevent revisiting the same node value

        while q:
            minutes += 1
            for _ in range(len(q)):
                cur_val = q.popleft()
                for related_val in node_relation[cur_val]:
                    if related_val in visited:
                        continue
                    q.append(related_val)
                    visited.add(related_val)
        
        return minutes
