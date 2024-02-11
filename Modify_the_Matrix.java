class Solution {
    public int[][] modifiedMatrix(int[][] matrix) {
        int m = matrix.length; // row
        int n = matrix[0].length; // column
        int[][] answer = new int[m][n];

        for (int r = 0; r < m; r++) {
            answer[r] = Arrays.copyOf(matrix[r], n);
        }

        for (int c = 0; c < n; c++) {
            int maxVal = Integer.MIN_VALUE;
            for (int r = 0; r < m; r++) {
                maxVal = Math.max(maxVal, matrix[r][c]);
            }
            for (int r = 0; r < m; r++) {
                if (matrix[r][c] == -1) {
                    answer[r][c] = maxVal;
                }
            }
        }

        return answer;        
    }
}
