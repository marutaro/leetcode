class Solution:
    def largestPathValue(self, colors: str, edges: List[List[int]]) -> int:
        graph = defaultdict(list)
        # indegree of vertex is the number of edges going to the vertex
        indegree = [0] * len(colors)

        for edge in edges:
            if edge[0] == edge[1]:
                return -1
            graph[edge[0]].append(edge[1])
            indegree[edge[1]] += 1
        
        q = deque([i for i in range(len(colors)) if indegree[i] == 0])
        dp = [[0] * 26 for _ in range(len(colors))]
        max_color = 0

        while q:
            vertex = q.popleft()
            color = ord(colors[vertex]) - ord('a')
            dp[vertex][color] += 1
            max_color = max(max_color, dp[vertex][color])

            for nei in graph[vertex]:
                indegree[nei] -= 1
            
                for c in range(26):
                    dp[nei][c] = max(dp[nei][c], dp[vertex][c])
                
                if indegree[nei] == 0:
                    q.append(nei)

        if any(indegree):
            return -1

        return max_color
