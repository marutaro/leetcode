class Solution:
    def canMakeArithmeticProgression(self, arr: List[int]) -> bool:
        minimum = min(arr)
        maximum = max(arr)
        n = len(arr)

        diff = (maximum - minimum) // (n - 1)
        nums = set(arr)

        if diff == 0:
            return len(nums) == 1
        
        for i in range(minimum, maximum + 1, diff):
            if i not in nums:
                return False
        
        return True
