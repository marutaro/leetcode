class Solution:
    def maximumDetonation(self, bombs: List[List[int]]) -> int:
        reachable_bombs = defaultdict(list)
        n = len(bombs)

        for i in range(n):
            for j in range(n):
                if i == j:
                    continue
                
                xi, yi, ri = bombs[i]
                xj, yj, _ = bombs[j]

                if ri ** 2 >= (xi - xj) ** 2 + (yi - yj) ** 2:
                    reachable_bombs[i].append(j)
        
        def bfs(start):
            visited = set()
            queue = deque([start])
            visited.add(start)

            while queue:
                cur = queue.popleft()
                for nei in reachable_bombs[cur]:
                    if nei not in visited:
                        queue.append(nei)
                        visited.add(nei)

            return len(visited)

        ans = 0
        for i in range(n):
            ans = max(ans, bfs(i))
        
        return ans
