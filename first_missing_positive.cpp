class Solution {
public:
    int firstMissingPositive(vector<int>& nums) {

        nums.erase(remove_if(nums.begin(), nums.end(), [](int n) { return n <= 0; }), nums.end());

        for (int i = 0; i < nums.size(); i++) {
            int n = abs(nums[i]);
            if (n <= nums.size() && nums[n - 1] > 0) {
                nums[n - 1] = -nums[n - 1];
            }
        }

        for (int i = 0; i < nums.size(); i++) {
            if (nums[i] > 0) {
                return i + 1;
            }
        }

        return nums.size() + 1;        
    }
};
