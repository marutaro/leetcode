class Solution {
public:
    vector<vector<int>> modifiedMatrix(vector<vector<int>>& matrix) {
        int m = matrix.size(); // row
        int n = matrix[0].size(); // column
        vector<vector<int>> answer(matrix);

        for (int c = 0; c < n; c++) {
            int maxVal = numeric_limits<int>::min();
            for (int r = 0; r < m; r++) {
                maxVal = max(maxVal, matrix[r][c]);
            }
            for (int r = 0; r < m; r++) {
                if (matrix[r][c] == -1) {
                    answer[r][c] = maxVal;
                }
            }
        }

        return answer;        
    }
};
