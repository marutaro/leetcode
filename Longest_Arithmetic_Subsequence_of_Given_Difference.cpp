class Solution {
public:
    int longestSubsequence(vector<int>& arr, int difference) {
        std::unordered_map<int, int> dp;
        int maxLength = 0;

        for (int n : arr) {
            if (dp.count(n - difference)) {
                dp[n] = dp[n - difference] + 1;
            } else {
                dp[n] = 1;
            }

            maxLength = std::max(maxLength, dp[n]);
        }

        return maxLength;        
    }
};
