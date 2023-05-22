class Solution {
    public int shortestBridge(int[][] grid) {
        int rows = grid.length;
        int cols = grid[0].length;
        Deque<int[]> queue = new ArrayDeque<>();
        Set<String> visited = new HashSet<>();

        // Find any island and mark its cells as 2 and set starting positions
        class DFS {
            void dfs(int r, int c) {
                if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] != 1) {
                    return;
                }
                grid[r][c] = 2;
                queue.offer(new int[]{r, c});
                visited.add(r + "," + c);
                dfs(r + 1, c);
                dfs(r - 1, c);
                dfs(r, c + 1);
                dfs(r, c - 1);
            }
        }

        boolean found = false;
        DFS dfs = new DFS();
        for (int r = 0; r < rows; r++) {
            if (found) {
                break;
            }
            for (int c = 0; c < cols; c++) {
                if (grid[r][c] == 1) {
                    dfs.dfs(r, c);
                    found = true;
                    break;
                }
            }
        }

        // Perform a BFS starting from the cells marked as 2
        int distance = 0;
        int[][] directions = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
        while (!queue.isEmpty()) {
            int size = queue.size();
            for (int i = 0; i < size; i++) {
                int[] cell = queue.poll();
                int row = cell[0];
                int col = cell[1];

                for (int[] dir : directions) {
                    int newRow = row + dir[0];
                    int newCol = col + dir[1];

                    if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols &&
                            !visited.contains(newRow + "," + newCol)) {
                        if (grid[newRow][newCol] == 1) {
                            return distance;
                        }

                        queue.offer(new int[]{newRow, newCol});
                        visited.add(newRow + "," + newCol);
                    }
                }
            }
            distance++;
        }

        return -1;        
    }
}
