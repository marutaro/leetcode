class Solution:
    def shortestPathAllKeys(self, grid: List[str]) -> int:
        rows, cols = len(grid), len(grid[0])
        q = deque([])
        found_keys = 0 # track the number of keys found

        keys = {"a" : 0, "b": 1, "c" : 2, "d" : 3, "e" : 4, "f" : 5}
        locks = {"A" : 0, "B": 1, "C" : 2, "D" : 3, "E" : 4, "F" : 5}

        # traverse the grid to get a starting point and count the number of keys
        for r in range(rows):
            for c in range(cols):
                if grid[r][c] == "@":
                    q.append((r, c, 0, 0))
                elif grid[r][c] in keys:
                    found_keys += 1
        
        visited = set()

        while q:
            for _ in range(len(q)):
                row, col, found, steps = q.popleft()
                cur = grid[row][col]

                # Skip the current position if it is a locked door without corresponding key
                # or if it is a wall
                if cur in locks and not (found >> locks[cur]) & 1 or cur == "#":
                    continue
                
                # Update the found keys by setting the corresponding bit to 1
                if cur in keys:
                    found |= 1 << keys[cur]

                    # If all the keys are found, return the number of steps taken
                    if found == (1 << found_keys) - 1:
                        return steps
                
                # Explore the neighboring position (up, down, left, right)
                for new_row, new_col in [(row + 1, col), (row - 1, col), (row, col+ 1), (row, col - 1)]:
                    if 0 <= new_row < rows and 0 <= new_col < cols and (new_row, new_col, found) not in visited:
                        visited.add((new_row, new_col, found))
                        q.append((new_row, new_col, found, steps + 1))
        
        return -1 # if it is not possible to collect all the keys
