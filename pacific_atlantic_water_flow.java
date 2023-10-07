class Solution {
    public List<List<Integer>> pacificAtlantic(int[][] heights) {
        List<List<Integer>> result = new ArrayList<>();
        if (heights == null || heights.length == 0 || heights[0].length == 0)
            return result;

        int rows = heights.length;
        int cols = heights[0].length;

        Queue<int[]> pacificQueue = new LinkedList<>();
        Queue<int[]> atlanticQueue = new LinkedList<>();
        boolean[][] pacificReachable = new boolean[rows][cols];
        boolean[][] atlanticReachable = new boolean[rows][cols];

        // Initialize the Pacific and Atlantic BFS queues with border points
        for (int i = 0; i < rows; i++) {
            pacificQueue.offer(new int[]{i, 0});
            atlanticQueue.offer(new int[]{i, cols - 1});
            pacificReachable[i][0] = true;
            atlanticReachable[i][cols - 1] = true;
        }

        for (int j = 0; j < cols; j++) {
            pacificQueue.offer(new int[]{0, j});
            atlanticQueue.offer(new int[]{rows - 1, j});
            pacificReachable[0][j] = true;
            atlanticReachable[rows - 1][j] = true;
        }

        bfs(heights, pacificQueue, pacificReachable);
        bfs(heights, atlanticQueue, atlanticReachable);

        // Find the intersection of the two reachable sets
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                if (pacificReachable[i][j] && atlanticReachable[i][j]) {
                    List<Integer> coordinates = new ArrayList<>();
                    coordinates.add(i);
                    coordinates.add(j);
                    result.add(coordinates);
                }
            }
        }

        return result;
    }

    private void bfs(int[][] heights, Queue<int[]> queue, boolean[][] reachable) {
        int rows = heights.length;
        int cols = heights[0].length;
        int[][] directions = {{0, 1}, {0, -1}, {1, 0}, {-1, 0}};

        while (!queue.isEmpty()) {
            int[] current = queue.poll();
            int row = current[0];
            int col = current[1];

            for (int[] dir : directions) {
                int newRow = row + dir[0];
                int newCol = col + dir[1];

                if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols
                        && !reachable[newRow][newCol]
                        && heights[newRow][newCol] >= heights[row][col]) {
                    queue.offer(new int[]{newRow, newCol});
                    reachable[newRow][newCol] = true;
                }
            }
        }
    }
}
