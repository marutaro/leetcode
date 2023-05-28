class Solution:
    def minCost(self, n: int, cuts: List[int]) -> int:

        def dfs(left, right):
            if right - left <= 1:
                return 0
            
            if not dp[left][right]:
                dp[left][right] = float("inf")

                for i in range(left + 1, right):
                    cost = cuts[right] - cuts[left]
                    dp[left][right] = min(dp[left][right], cost + dfs(left, i) + dfs(i, right))
            
            return dp[left][right]

        cuts.append(0)
        cuts.append(n)
        cuts.sort()

        dp = [[0] * len(cuts) for _ in range(len(cuts))]
        return dfs(0, len(cuts) - 1)
