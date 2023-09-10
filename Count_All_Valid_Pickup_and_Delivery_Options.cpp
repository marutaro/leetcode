class Solution {
public:
    int countOrders(int n) {
        const int MOD = 1000000007;
        long long totalWays = 1;
        for (int orderNumber = 2; orderNumber <= n; orderNumber++) {
            totalWays = (totalWays * (2LL * orderNumber - 1) * orderNumber) % MOD;
        }
        return static_cast<int>(totalWays);        
    }
};
