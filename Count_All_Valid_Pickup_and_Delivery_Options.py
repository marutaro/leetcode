class Solution:
    def countOrders(self, n: int) -> int:
        MOD = 10**9 + 7
        total_ways = 1

        for order_number in range(2, n + 1):
            total_ways = (total_ways * (2 * order_number - 1) * order_number) % MOD
        
        return total_ways
