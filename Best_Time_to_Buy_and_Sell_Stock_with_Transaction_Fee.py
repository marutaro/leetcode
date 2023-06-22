class Solution:
    def maxProfit(self, prices: List[int], fee: int) -> int:
        n = len(prices)
        if n < 2:
            return 0

        buy = -prices[0]
        sell = 0

        for i in range(1, n):
            temp = buy
            buy = max(buy, sell - prices[i])
            sell = max(sell, temp + prices[i] - fee)
        
        return sell
