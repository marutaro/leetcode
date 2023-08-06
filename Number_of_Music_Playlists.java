class Solution {
    public int numMusicPlaylists(int n, int goal, int k) {
        int MOD = 1000000007;

        int[][] dp = new int[goal + 1][n + 1];
        dp[0][0] = 1;

        for (int i = 1; i <= goal; i++) {
            for (int j = 1; j <= Math.min(i, n); j++) {
                dp[i][j] = (int)((long)dp[i - 1][j - 1] * (n - j + 1) % MOD);

                if (j > k) {
                    dp[i][j] = (dp[i][j] + (int)((long)dp[i - 1][j] * (j - k) % MOD)) % MOD;
                }
            }
        }

        return dp[goal][n];
    }
}
