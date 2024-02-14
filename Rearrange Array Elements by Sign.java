class Solution {
    public int[] rearrangeArray(int[] nums) {
        int pi = 0;
        int ni = 1;
        int[] res = new int[nums.length];
        Arrays.fill(res, 0);

        for (int n : nums) {
            if (n > 0) {
                res[pi] = n;
                pi += 2;
            } else {
                res[ni] = n;
                ni += 2;
            }
        }

        return res; 
    }
}
