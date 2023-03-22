class Solution {
public:
    void nextPermutation(vector<int>& nums) {

        int i = nums.size() - 1;
        while (i > 0 && nums[i-1] >= nums[i]) {
            i--;
        }
        
        if (i == 0) {
            std::reverse(nums.begin(), nums.end());
            return;
        }
        
        int j = nums.size() - 1;
        while (j >= i && nums[j] <= nums[i-1]) {
            j--;
        }
        
        std::swap(nums[i-1], nums[j]);
        
        std::reverse(nums.begin() + i, nums.end());        
    }
};
