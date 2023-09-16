class Solution {
    public int minimumEffortPath(int[][] heights) {
        if (heights.length == 0) {
            return 0;
        }
        
        int rows = heights.length;
        int cols = heights[0].length;
        PriorityQueue<int[]> minHeap = new PriorityQueue<>((a, b) -> a[0] - b[0]); // [effort, row, col]
        minHeap.offer(new int[]{0, 0, 0});
        int maxEffort = 0;
        Set<String> visited = new HashSet<>();

        while (!minHeap.isEmpty()) {
            int[] current = minHeap.poll();
            int effort = current[0];
            int curRow = current[1];
            int curCol = current[2];

            maxEffort = Math.max(maxEffort, effort);
            if (curRow == rows - 1 && curCol == cols - 1) {
                return maxEffort;
            }
            visited.add(curRow + "," + curCol);

            int[][] directions = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
            for (int[] direction : directions) {
                int newRow = curRow + direction[0];
                int newCol = curCol + direction[1];

                if (0 <= newRow && newRow < rows && 0 <= newCol && newCol < cols &&
                    !visited.contains(newRow + "," + newCol)) {
                    int newEffort = Math.abs(heights[newRow][newCol] - heights[curRow][curCol]);
                    minHeap.offer(new int[]{newEffort, newRow, newCol});
                }
            }
        }
        
        return maxEffort;        
    }
}
