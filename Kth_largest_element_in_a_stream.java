class KthLargest {
    private int k;
    private Queue<Integer> nums;

    public KthLargest(int k, int[] nums) {
        this.k = k;
        this.nums = new PriorityQueue<>();
        for (int i = 0; i < nums.length; i++) {
            this.nums.add(nums[i]);
            if (this.nums.size() > k) {
                this.nums.poll();
            }
        }        
    }
    
    public int add(int val) {
        nums.add(val);
        if (nums.size() > k) {
            nums.poll();
        }
        return nums.peek();        
    }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * KthLargest obj = new KthLargest(k, nums);
 * int param_1 = obj.add(val);
 */
