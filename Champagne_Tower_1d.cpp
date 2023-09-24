class Solution {
public:
    double champagneTower(int poured, int query_row, int query_glass) {
        vector<double> glassLevels(100, 0.0);
        glassLevels[0] = poured;

        for (int curRow = 0; curRow < query_row; curRow++) {
            vector<double> nextLevels(100, 0.0);

            for (int curGlass = 0; curGlass <= curRow; curGlass++) {
                double overflow = max(0.0, (glassLevels[curGlass] - 1.0) / 2.0);
                nextLevels[curGlass] += overflow;
                nextLevels[curGlass + 1] += overflow;
            }

            glassLevels = nextLevels;
        }

        return min(1.0, glassLevels[query_glass]);        
    }
};
