class Solution {
    public int maxProfit(int[] prices, int fee) {
        int n = prices.length;
        if (n < 2) {
            return 0;
        }

        int buy = -prices[0];
        int sell = 0;

        for (int i = 1; i < n; i++) {
            int temp = buy;
            buy = Math.max(buy, sell - prices[i]);
            sell = Math.max(sell, temp + prices[i] - fee);
        }

        return sell;        
    }
}
