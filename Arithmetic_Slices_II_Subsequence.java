class Solution {
    public int numberOfArithmeticSlices(int[] nums) {
        int n = nums.length;
        int total = 0;

        HashMap<Integer, Integer>[] dp = new HashMap[n];

        for (int i = 0; i < n; ++i) {
            dp[i] = new HashMap<>();
        }

        for (int i = 1; i < n; ++i) {
            for (int j = 0; j < i; ++j) {
                long diff = (long) nums[i] - nums[j]; 

                if (diff > Integer.MAX_VALUE || diff < Integer.MIN_VALUE) {
                    continue; 
                }

                int diffInt = (int) diff;

                dp[i].put(diffInt, dp[i].getOrDefault(diffInt, 0) + 1);  
                if (dp[j].containsKey(diffInt)) {
                    dp[i].put(diffInt, dp[i].get(diffInt) + dp[j].get(diffInt));
                    total += dp[j].get(diffInt);
                }
            }
        }

        return total;        
    }
}
