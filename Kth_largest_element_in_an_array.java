class Solution {
    public int findKthLargest(int[] nums, int k) {
        k = nums.length - k;

        Random random = new Random();
        for (int i = nums.length - 1; i >= 0; i--) {
            int j = random.nextInt(i + 1);
            int temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
        }

        return quickSelect(nums, 0, nums.length - 1, k);        
    }

    private int quickSelect(int[] nums, int left, int right, int k) {
        int pivot = nums[right];
        int p = left;

        for (int i = left; i < right; i++) {
            if (nums[i] <= pivot) {
                int temp = nums[i];
                nums[i] = nums[p];
                nums[p] = temp;
                p++;
            }
        }

        int temp = nums[p];
        nums[p] = nums[right];
        nums[right] = temp;

        if (p > k) {
            return quickSelect(nums, left, p - 1, k);
        } else if (p < k) {
            return quickSelect(nums, p + 1, right, k);
        } else {
            return nums[p];
        }
    }    
}
