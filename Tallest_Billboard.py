class Solution:
    def tallestBillboard(self, rods: List[int]) -> int:
        dp = {0:0}

        for rod in rods:
            for diff, highest in list(dp.items()):
                left_diff = diff + rod
                dp[left_diff] = max(dp.get(left_diff, 0), highest + rod)

                right_rod = highest - diff + rod
                right_diff = abs(highest - right_rod)
                dp[right_diff] = max(dp.get(right_diff, 0), max(highest, right_rod))
        
        return dp[0]
