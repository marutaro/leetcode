class Solution:
    def rob(self, nums: List[int]) -> int:

        def get_max(nums):
            nei_max = rob_max = 0

            for n in nums:
                temp = max(rob_max, n + nei_max)
                nei_max = rob_max
                rob_max = temp
            
            return rob_max

        return max(get_max(nums[1:]), get_max(nums[:-1]), nums[0])
