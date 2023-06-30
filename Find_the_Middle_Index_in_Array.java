class Solution {
    public int findMiddleIndex(int[] nums) {
        int left = 0;
        int right = 0;
        for (int num : nums) {
            right += num;
        }
        
        for (int i = 0; i < nums.length; i++) {
            right -= nums[i];
            
            if (left == right) {
                return i;
            }
            
            left += nums[i];
        }
        
        return -1;        
    }
}
