class Solution {
    public int countOrders(int n) {
        final int MOD = 1000000007;
        int totalWays = 1;
        for (int orderNumber = 2; orderNumber <= n; orderNumber++) {
            totalWays = (int)((totalWays * (2L * orderNumber - 1) * orderNumber) % MOD);
        }
        return totalWays;        
    }
}
