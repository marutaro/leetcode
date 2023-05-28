class Solution {
public:
    int minCost(int n, vector<int>& cuts) {
        cuts.push_back(0);
        cuts.push_back(n);
        std::sort(cuts.begin(), cuts.end());

        std::vector<std::vector<int>> dp(cuts.size(), std::vector<int>(cuts.size(), 0));

        return dfs(0, cuts.size() - 1, cuts, dp);        
    }

private:
    int dfs(int left, int right, const std::vector<int>& cuts, std::vector<std::vector<int>>& dp) {
        if (right - left <= 1) {
            return 0;
        }

        if (dp[left][right] == 0) {
            dp[left][right] = INT_MAX;

            for (int i = left + 1; i < right; i++) {
                int cost = cuts[right] - cuts[left];
                dp[left][right] = std::min(dp[left][right], cost + dfs(left, i, cuts, dp) + dfs(i, right, cuts, dp));
            }
        }

        return dp[left][right];
    }
};
