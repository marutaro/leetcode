class Solution:
    def numSubseq(self, nums: List[int], target: int) -> int:
        nums.sort()
        left, right = 0, len(nums) - 1
        ans = 0
        mod = 10 ** 9 + 7

        while left <= right:
            if nums[left] + nums[right] > target:
                right -= 1
            else:
                # pow(x, y, z) = x^y % z
                ans += pow(2, right - left, mod)
                left += 1
        
        return ans % mod
