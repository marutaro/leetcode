class Solution {

    public double knightProbability(int n, int k, int row, int column) {
        int[][] moves = {{-2, -1}, {-2, 1}, {-1, -2}, {-1, 2}, {1, -2}, {1, 2}, {2, -1}, {2, 1}};

        double [][] curBoard;
        double [][] nextBoard = new double[n][n];
        nextBoard[row][column] = 1.0;
        
        for (int i = 0; i < k; i++) {
            curBoard = nextBoard;
            nextBoard = new double[n][n];
            
            for (int r = 0; r < n; r++) {
                for (int c = 0; c < n; c++) {
                    if (curBoard[r][c] == 0.0)
                        continue;
                    
                    for (int [] dir : moves) {
                        int nextRow = r + dir[0];
                        int nextCol = c + dir[1];
                        
                        if (nextRow >= 0 && nextRow < n && nextCol >= 0 && nextCol < n) {
                            nextBoard[nextRow][nextCol] += curBoard[r][c] / 8.0;
                        }
                    }
                }
            }
        }
        
        double total = 0.0;
        for (int r = 0; r < n; r++)
            for (int c = 0; c < n; c++)
                total += nextBoard[r][c];
        
        return total;
    }
}
