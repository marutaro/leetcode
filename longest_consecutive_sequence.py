class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:    
        num_set = set(nums)
        longest_length = 0
        
        for n in nums:
            if n - 1 not in num_set:
                length = 1
                while n + length in num_set:
                    length += 1
                
                longest_length = max(longest_length, length)
        
        return longest_length