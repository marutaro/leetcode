class Solution:
    def shortestBridge(self, grid: List[List[int]]) -> int:
        rows, cols = len(grid), len(grid[0])
        queue = deque()
        visited = set()
        # Find any island and mark its cells as 2 and set starting positions
        def dfs(r, c):
            if r < 0 or r >= rows or c < 0 or c >= cols or grid[r][c] != 1:
                return
            grid[r][c] = 2
            queue.append((r, c))
            visited.add((r, c))
            dfs(r+1, c)
            dfs(r-1, c)
            dfs(r, c+1)
            dfs(r, c-1)                                    

        found = False
        for r in range(rows):
            if found:
                break
            for c in range(cols):
                if grid[r][c] == 1:
                    dfs(r, c)
                    found = True
                    break

        # Perform a BFS starting from the cells marked as 2 
        distance = 0
        while queue:
            for _ in range(len(queue)):
                row, col = queue.popleft()

                for dx, dy in [(1, 0), (-1, 0), (0, 1), (0, -1)]:
                    new_row, new_col = row + dy, col + dx

                    if 0 <= new_row < rows and 0 <= new_col < cols and(new_row, new_col) not in visited:
                        if grid[new_row][new_col] == 1:
                            return distance
                        
                        queue.append((new_row, new_col))
                        visited.add((new_row, new_col))
            distance += 1
            
            
