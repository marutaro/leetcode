class Solution {
    public double champagneTower(int poured, int query_row, int query_glass) {
        double[][] pyramid = new double[101][];
        for (int i = 0; i < 101; i++)
            pyramid[i] = new double[i + 1];
        pyramid[0][0] = poured;

        for (int row = 0; row < query_row; row++) {
            for (int glass = 0; glass <= row; glass++) {
                double overflow = Math.max(0, (pyramid[row][glass] - 1.0) / 2.0);
                if (overflow > 0) {
                    pyramid[row + 1][glass] += overflow;
                    pyramid[row + 1][glass + 1] += overflow;
                }
            }
        }

        return Math.min(1.0, pyramid[query_row][query_glass]);        
    }
}
