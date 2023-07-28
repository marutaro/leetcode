class Solution {
public:
    bool PredictTheWinner(vector<int>& nums) {
        int n = nums.size();
        vector<int> max_diff(n, 0);

        for (int i = n - 1; i >= 0; i--) {
            max_diff[i] = nums[i];
            for (int j = i + 1; j < n; j++) {
                max_diff[j] = max(nums[i] - max_diff[j], nums[j] - max_diff[j - 1]);
            }
        }

        return max_diff[n - 1] >= 0;        
    }
};
