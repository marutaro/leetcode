class Solution:
    def shortestPathBinaryMatrix(self, grid: List[List[int]]) -> int:
        # Check if the starting or ending cell is blocked
        if grid[0][0] == 1 or grid[-1][-1] == 1:
            return -1
        
        n = len(grid)
        directions = [(1, 0), (-1, 0), (0, 1), (0, -1), (1, 1), (-1, -1), (1, -1), (-1, 1)]

        # Use a queue for BFS
        queue = deque([(0, 0, 1)]) # (row, column, distance)
        grid[0][0] = 1 # Mark the starting cell as visited

        # BFS
        while queue:
            row, col, distance = queue.popleft()

            if row == n - 1 and col == n - 1:
                return distance # Reached the ending cell
            
            # Explore all possible neighbors
            for dx, dy in directions:
                new_row, new_col = row + dx, col + dy

                # Check if the neighbor is within the grid and not blocked
                if 0 <= new_row < n and 0 <= new_col < n and grid[new_row][new_col] == 0:
                    queue.append((new_row, new_col, distance + 1))
                    grid[new_row][new_col] = 1
        
        return -1
