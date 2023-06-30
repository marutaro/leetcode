class Solution {
public:
    int findMiddleIndex(vector<int>& nums) {
        int left = 0;
        int right = 0;
        for (int num : nums) {
            right += num;
        }
        
        for (int i = 0; i < nums.size(); i++) {
            right -= nums[i];
            
            if (left == right) {
                return i;
            }
            
            left += nums[i];
        }
        
        return -1;        
    }
};
