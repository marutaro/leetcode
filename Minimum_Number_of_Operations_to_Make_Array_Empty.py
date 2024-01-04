class Solution:
    def minOperations(self, nums: List[int]) -> int:
        freq = {}
        
        for n in nums:
            freq[n] = 1 + freq.get(n, 0)
        
        if 1 in freq.values():
            return -1
        
        return sum((f + 2) // 3 for f in freq.values())
