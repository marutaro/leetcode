class Solution {
    public double champagneTower(int poured, int query_row, int query_glass) {
        double[] glassLevels = new double[100];
        glassLevels[0] = poured;

        for (int curRow = 0; curRow < query_row; curRow++) {
            double[] nextLevels = new double[100];

            for (int curGlass = 0; curGlass <= curRow; curGlass++) {
                double overflow = Math.max(0, (glassLevels[curGlass] - 1.0) / 2.0);
                nextLevels[curGlass] += overflow;
                nextLevels[curGlass + 1] += overflow;
            }

            glassLevels = nextLevels;
        }

        return Math.min(1.0, glassLevels[query_glass]);        
    }
}
