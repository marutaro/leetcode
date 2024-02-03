class Solution {
    public int maxSumAfterPartitioning(int[] arr, int k) {
        int n = arr.length;
        int[] maxSum = new int[n + 1];

        for (int i = 1; i <= n; i++) {
            int mpn = Integer.MIN_VALUE;
            for (int mpnCount = 1; mpnCount <= Math.min(i, k); mpnCount++) {
                mpn = Math.max(mpn, arr[i - mpnCount]);
                maxSum[i] = Math.max(maxSum[i], maxSum[i - mpnCount] + mpn * mpnCount);
            }
        }

        return maxSum[n];        
    }
}
