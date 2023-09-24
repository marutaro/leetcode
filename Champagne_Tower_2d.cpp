class Solution {
public:
    double champagneTower(int poured, int query_row, int query_glass) {
        vector<vector<double>> pyramid(101, vector<double>(101, 0.0));
        pyramid[0][0] = poured;

        for (int row = 0; row < query_row; row++) {
            for (int glass = 0; glass <= row; glass++) {
                double overflow = max(0.0, (pyramid[row][glass] - 1.0) / 2.0);
                if (overflow > 0) {
                    pyramid[row + 1][glass] += overflow;
                    pyramid[row + 1][glass + 1] += overflow;
                }
            }
        }

        return min(1.0, pyramid[query_row][query_glass]);        
    }
};
