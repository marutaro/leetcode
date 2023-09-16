class Solution:
    def minimumEffortPath(self, heights):
        if not heights:
            return 0
        
        rows, cols = len(heights), len(heights[0])
        min_heap = [(0, 0, 0)] # (effort, row, col)
        max_effort = 0
        visited = set()

        while min_heap:
            effort, cur_row, cur_col = heapq.heappop(min_heap)

            max_effort = max(max_effort, effort)
            if (cur_row, cur_col) == (rows - 1, cols - 1):
                return max_effort
            visited.add((cur_row, cur_col))

            for dr, dc in [(1, 0), (-1, 0), (0, 1), (0, -1)]:
                new_row, new_col = cur_row + dr, cur_col + dc

                if 0 <= new_row < rows and 0 <= new_col < cols and(new_row, new_col) not in visited:
                    new_effort = abs(heights[new_row][new_col] - heights[cur_row][cur_col])
                    heapq.heappush(min_heap, (new_effort, new_row, new_col))
        
        return max_effort
