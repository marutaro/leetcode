class Solution {
public:
    int tallestBillboard(vector<int>& rods) {
        std::unordered_map<int, int> dp;
        dp[0] = 0;

        for (int rod : rods) {
            std::unordered_map<int, int> currDP(dp);

            for (const auto& entry : dp) {
                int diff = entry.first;
                int highest = entry.second;

                int leftDiff = diff + rod;
                currDP[leftDiff] = std::max(currDP[leftDiff], highest + rod);

                int rightRod = highest - diff + rod;
                int rightDiff = std::abs(highest - rightRod);
                currDP[rightDiff] = std::max(currDP[rightDiff], std::max(highest, rightRod));
            }

            dp = currDP;
        }

        return dp[0];        
    }
};
