class Solution:
    def eventualSafeNodes(self, graph: List[List[int]]) -> List[int]:
        n = len(graph)
        visited = [0] * n # 0: unvisited, 1: visiting, 2: terminal
        result = []

        def isSafe(node):
            if visited[node] > 0:
                return visited[node] == 2
            
            visited[node] = 1
            for neighbor in graph[node]:
                if not isSafe(neighbor):
                    return False
            
            visited[node] = 2
            return True

        for i in range(n):
            if isSafe(i):
                result.append(i)
        
        return result
