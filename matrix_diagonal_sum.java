class Solution {
    public int diagonalSum(int[][] mat) {
        int last_row = mat.length - 1;
        int total = 0;

        for (int i = 0; i < mat.length; i++) {
            total += mat[i][i];
            total += mat[last_row - i][i];

            if (i == last_row - i) {
                total -= mat[i][i];
            }
        }

        return total;
    }
}
