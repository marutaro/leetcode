class Solution {
    public boolean isMonotonic(int[] nums) {
        int n = nums.length;
        if (n == 1) return true;

        boolean isInc = true;
        boolean isDec = true;

        for (int i = 1; i < n; i++) {
            if (!isInc && !isDec) {
                return false;
            }

            if (nums[i] < nums[i - 1]) {
                isInc = false;
            }
            if (nums[i] > nums[i - 1]) {
                isDec = false;
            }
        }

        return isInc || isDec;        
    }
}
