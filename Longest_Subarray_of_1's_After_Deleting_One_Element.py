class Solution:
    def longestSubarray(self, nums: List[int]) -> int:

        left = 0
        max_length = 0
        last_zero = -1

        for right in range(len(nums)):
            if nums[right] == 0:
                left = last_zero + 1
                last_zero = right
            
            max_length = max(max_length, right - left)
        
        return max_length
