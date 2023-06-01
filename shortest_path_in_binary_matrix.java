class Solution {
    public int shortestPathBinaryMatrix(int[][] grid) {
        // Check if the starting or ending cell is blocked
        if (grid[0][0] == 1 || grid[grid.length - 1][grid[0].length - 1] == 1) {
            return -1;
        }

        int n = grid.length;
        int[][] directions = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}, {1, 1}, {-1, -1}, {1, -1}, {-1, 1}};

        // Use a queue for BFS
        Queue<int[]> queue = new ArrayDeque<>();
        queue.offer(new int[]{0, 0, 1}); // [row, column, distance]
        grid[0][0] = 1; // Mark the starting cell as visited

        // BFS
        while (!queue.isEmpty()) {
            int[] current = queue.poll();
            int row = current[0];
            int col = current[1];
            int distance = current[2];

            if (row == n - 1 && col == n - 1) {
                return distance; // Reached the ending cell
            }

            // Explore all possible neighbors
            for (int[] dir : directions) {
                int newRow = row + dir[0];
                int newCol = col + dir[1];

                // Check if the neighbor is within the grid and not blocked
                if (newRow >= 0 && newRow < n && newCol >= 0 && newCol < n && grid[newRow][newCol] == 0) {
                    queue.offer(new int[]{newRow, newCol, distance + 1});
                    grid[newRow][newCol] = 1;
                }
            }
        }

        return -1;        
    }
}
