class Solution {
public:
    int diagonalSum(vector<vector<int>>& mat) {
        int last_row = mat.size() - 1;
        int total = 0;

        for (int i = 0; i < mat.size(); i++) {
            total += mat[i][i];
            total += mat[last_row - i][i];

            if (i == last_row - i) {
                total -= mat[i][i];
            }
        }

        return total;        
    }
};
