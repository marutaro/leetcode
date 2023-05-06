class Solution {
    public int numSubseq(int[] nums, int target) {
        Arrays.sort(nums);
        int[] pow = new int[nums.length];
        pow[0] = 1;

        for (int i = 1; i < nums.length; i++) {
            pow[i] = (pow[i - 1] * 2) % 1000000007;
        }

        int left = 0, right = nums.length - 1;
        int res = 0;

        while (left <= right) {
            if (nums[left] + nums[right] > target) {
                right--;
            } else {
                res = (res + pow[right - left]) % 1000000007;
                left++;
            }
        }

        return res;    
    }
}
