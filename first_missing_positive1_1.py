class Solution:
    def firstMissingPositive(self, nums: List[int]) -> int:

        nums.sort()

        target = 1
        for n in nums:
            if n > 0 and n == target:
                target += 1
            elif n > target:
                return target
        
        return target
      
