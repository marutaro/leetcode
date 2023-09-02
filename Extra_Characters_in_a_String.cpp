class Solution {
public:
    int minExtraChar(string s, vector<string>& dictionary) {
        int maxLen = s.length() + 1;
        vector<int> dp(maxLen, maxLen);
        
        dp[0] = 0;
        unordered_set<string> wordSet(dictionary.begin(), dictionary.end());
        
        for (int i = 1; i < maxLen; i++) {
            dp[i] = dp[i - 1] + 1;
            
            for (int length = 1; length <= i; length++) {
                string substring = s.substr(i - length, length);
                if (wordSet.count(substring)) {
                    dp[i] = min(dp[i], dp[i - length]);
                }
            }
        }
        
        return dp[maxLen - 1];        
    }
};
