class Solution:
    def maxSumAfterPartitioning(self, arr: List[int], k: int) -> int:
        n = len(arr)
        max_sum = [0] * (n + 1)

        for i in range(1, n + 1):
            mpn = float("-inf")
            for mpn_count in range(1, min(i, k) + 1):
                mpn = max(mpn, arr[i - mpn_count])
                max_sum[i] = max(max_sum[i], max_sum[i - mpn_count] + mpn * mpn_count)
        
        return max_sum[n]
