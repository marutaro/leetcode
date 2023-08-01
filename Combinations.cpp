class Solution {
public:
    vector<vector<int>> combine(int n, int k) {
        std::vector<std::vector<int>> res;
        std::vector<int> comb;

        backtrack(1, comb, res, n, k);
        return res;        
    }

private:
    void backtrack(int start, std::vector<int>& comb, std::vector<std::vector<int>>& res, int n, int k) {
        if (comb.size() == k) {
            res.push_back(comb);
            return;
        }

        for (int num = start; num <= n; num++) {
            comb.push_back(num);
            backtrack(num + 1, comb, res, n, k);
            comb.pop_back();
        }
    }    
};
