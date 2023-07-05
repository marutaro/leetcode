class Solution {
    public int longestSubarray(int[] nums) {
        int left = 0;
        int max_length = 0;
        int last_zero = -1;

        for (int right = 0; right < nums.length; right++) {
            if (nums[right] == 0) {
                left = last_zero + 1;
                last_zero = right;
            }

            max_length = Math.max(max_length, right - left);
        }

        return max_length;        
    }
}
