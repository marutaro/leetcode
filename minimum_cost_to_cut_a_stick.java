class Solution {
    public int minCost(int n, int[] cuts) {
        int[] extendedCuts = new int[cuts.length + 2];
        extendedCuts[0] = 0;
        extendedCuts[cuts.length + 1] = n;
        System.arraycopy(cuts, 0, extendedCuts, 1, cuts.length);
        Arrays.sort(extendedCuts);

        int[][] dp = new int[extendedCuts.length][extendedCuts.length];
        for (int[] row : dp) {
            Arrays.fill(row, 0);
        }

        return dfs(0, extendedCuts.length - 1, extendedCuts, dp);        
    }

    private int dfs(int left, int right, int[] cuts, int[][] dp) {
        if (right - left <= 1) {
            return 0;
        }

        if (dp[left][right] == 0) {
            dp[left][right] = Integer.MAX_VALUE;

            for (int i = left + 1; i < right; i++) {
                int cost = cuts[right] - cuts[left];
                dp[left][right] = Math.min(dp[left][right], cost + dfs(left, i, cuts, dp) + dfs(i, right, cuts, dp));
            }
        }

        return dp[left][right];
    }
}
