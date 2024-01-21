class Solution:
    def rob(self, nums: List[int]) -> int:
        prev_rob = max_rob = 0

        for cur_val in nums:
            temp = max(max_rob, prev_rob + cur_val)
            prev_rob = max_rob
            max_rob = temp
        
        return max_rob
