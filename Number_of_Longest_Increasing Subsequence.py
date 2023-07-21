class Solution:
    def findNumberOfLIS(self, nums: List[int]) -> int:
        dp = defaultdict(Counter)
        dp[-1][-float("inf")] = 1
        sorted_nums = []

        for num in nums:
            insert_index = bisect.bisect_left(sorted_nums, num)
            if insert_index == len(sorted_nums):
                sorted_nums.append(num)
            else:
                sorted_nums[insert_index] = num

            total = 0
            for prev_num in dp[insert_index - 1]:
                if prev_num < num:
                    total += dp[insert_index - 1][prev_num]
            
            dp[insert_index][num] += total
        
        return sum(dp[len(sorted_nums) - 1].values())
