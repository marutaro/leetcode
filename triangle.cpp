class Solution {
public:
    int minimumTotal(vector<vector<int>>& triangle) {
        int row = triangle.size();
        vector<int> memo = triangle[row-1];

        for (int r = row-2; r >= 0; r--) {
            for (int c = 0; c <= r; c++) {
                memo[c] = min(memo[c], memo[c+1]) + triangle[r][c];
            }
        }

        return memo[0];        
    }
};
