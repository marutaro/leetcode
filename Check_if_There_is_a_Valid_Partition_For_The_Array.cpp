class Solution {
public:
    bool validPartition(vector<int>& nums) {
        int n = nums.size();
        
        vector<bool> dp(3, false);
        dp[0] = true;  // An empty partition is always valid

        for (int i = 2; i <= n; i++) {
            bool ans = false;

            if (nums[i - 1] == nums[i - 2]) {
                ans = ans || dp[(i - 2) % 3];
            }
            if (i >= 3 && nums[i - 1] == nums[i - 2] && nums[i - 1] == nums[i - 3]) {
                ans = ans || dp[(i - 3) % 3];
            }
            if (i >= 3 && nums[i - 1] == nums[i - 2] + 1 && nums[i - 2] + 1 == nums[i - 3] + 2) {
                ans = ans || dp[(i - 3) % 3];
            }

            dp[i % 3] = ans;
        }

        return dp[n % 3];        
    }
};
