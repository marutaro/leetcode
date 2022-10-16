class Solution:
    def pivotIndex(self, nums: List[int]) -> int:
        total = sum(nums)
        left = 0 # left sum
        
        for i in range(len(nums)):
            right = total - left - nums[i] # right sum
            
            if right == left:
                return i
            
            left += nums[i]
        
        return -1
