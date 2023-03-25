from collections import deque

class Solution:
    def pacificAtlantic(self, heights: List[List[int]]) -> List[List[int]]:

        if not heights:
            return []
        
        rows, cols = len(heights), len(heights[0])

        def bfs(queue, matrix):
            rows, cols = len(matrix), len(matrix[0])
            visited = [[False] * cols for _ in range(rows)]
            directions = [(0, 1), (0, -1), (1, 0), (-1, 0)]
            
            while queue:
                row, col = queue.popleft()
                visited[row][col] = True
                
                # Check all adjacent points
                for dx, dy in directions:
                    new_row, new_col = row + dx, col + dy
                    
                    # If the adjacent point is not visited and is higher or at the same elevation, add it to the queue
                    if 0 <= new_row < rows and 0 <= new_col < cols and not visited[new_row][new_col] and matrix[new_row][new_col] >= matrix[row][col]:
                        queue.append((new_row, new_col))
                        visited[new_row][new_col] = True
            
            return visited
        
        # Initialize the Pacific and Atlantic BFS queues with border points
        pacific_queue = deque([(i, 0) for i in range(rows)] + [(0, j) for j in range(1, cols)])
        atlantic_queue = deque([(i, cols-1) for i in range(rows)] + [(rows-1, j) for j in range(cols-1)])
        
        # Use BFS to mark all points reachable from the Pacific and Atlantic Oceans
        pacific_reachable = bfs(pacific_queue, heights)
        atlantic_reachable = bfs(atlantic_queue, heights)
        
        # Find the intersection of the two reachable sets
        res = []
        for i in range(rows):
            for j in range(cols):
                if pacific_reachable[i][j] and atlantic_reachable[i][j]:
                    res.append([i, j])
        
        return res
