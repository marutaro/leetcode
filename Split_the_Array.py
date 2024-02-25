class Solution:
    def isPossibleToSplit(self, nums: List[int]) -> bool:
        count = {}

        for n in nums:
            count[n] = 1 + count.get(n, 0)
        
        for val in count.values():
            if val > 2:
                return False
        
        return True
