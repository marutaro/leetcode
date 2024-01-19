class Solution {
public:
    int minFallingPathSum(vector<vector<int>>& m) {
        for (auto r = 1; r < m.size(); ++r)
            for (auto c = 0; c < m.size(); ++c)
                m[r][c] += min({
                    m[r - 1][max(0,c - 1)],                     
                    m[r - 1][c],
                    m[r - 1][min((int)m.size() - 1, c + 1)] }
                );
        
        return *min_element(begin(m[m.size() - 1]), end(m[m.size() - 1]));          
    }
};
