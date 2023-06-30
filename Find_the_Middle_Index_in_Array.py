class Solution:
    def findMiddleIndex(self, nums: List[int]) -> int:
        left = 0
        right = sum(nums)

        for i, num in enumerate(nums):
            right -= num

            if left == right:
                return i
            
            left += num

        return -1
