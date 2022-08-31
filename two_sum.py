class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hash = {}
        
        for i in range(len(nums)):
            sub = target - nums[i]
            
            if sub in hash:
                return [i, hash[sub]]
            hash[nums[i]] = i
