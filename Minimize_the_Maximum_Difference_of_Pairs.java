class Solution {
    public int minimizeMax(int[] nums, int p) {
        Arrays.sort(nums);

        int left = 0;
        int right = nums[nums.length - 1] - nums[0];

        while (left < right) {
            int midDiff = (left + right) / 2;
            if (isFeasible(midDiff, nums, p)) {
                right = midDiff;
            } else {
                left = midDiff + 1;
            }
        }

        return left;        
    }

    private boolean isFeasible(int diff, int[] nums, int p) {
        int count = 0;
        int i = 0;
        while (i < nums.length - 1 && count < p) {
            if (nums[i + 1] - nums[i] <= diff) {
                count++;
                i += 2;
            } else {
                i++;
            }
        }
        return count >= p;
    }    
}
