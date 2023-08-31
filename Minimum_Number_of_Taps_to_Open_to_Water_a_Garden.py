class Solution:
    def minTaps(self, n: int, ranges: List[int]) -> int:
        max_range = [0] * (n + 1)

        for i in range(len(ranges)):
            left = max(0, i - ranges[i])
            right = min(n, i + ranges[i])
            max_range[left] = max(max_range[left], right)
        
        end = farthest = taps = 0
        i = 0

        while end < n:
            while i <= end:
                farthest = max(farthest, max_range[i])
                i += 1
            
            if farthest <= end:
                return -1
            
            end = farthest
            taps += 1
        
        return taps
