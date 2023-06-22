class Solution {
public:
    int maxProfit(vector<int>& prices, int fee) {
        int n = prices.size();
        if (n < 2) {
            return 0;
        }

        int buy = -prices[0];
        int sell = 0;

        for (int i = 1; i < n; i++) {
            int temp = buy;
            buy = std::max(buy, sell - prices[i]);
            sell = std::max(sell, temp + prices[i] - fee);
        }

        return sell;        
    }
};
