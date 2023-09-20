class Solution:
    def minOperations(self, nums: List[int], x: int) -> int:
        target = sum(nums) - x

        if target < 0:
            return -1
        
        left = 0
        cur_sum = 0
        max_sub_length = float('-inf')
        n = len(nums)

        for right in range(n):
            cur_sum += nums[right]

            while cur_sum > target:
                cur_sum -= nums[left]
                left += 1
            
            if cur_sum == target:
                max_sub_length = max(max_sub_length, right - left + 1)
        
        return -1 if max_sub_length == float('-inf') else n - max_sub_length
