class Solution:
    def largestAltitude(self, gain: List[int]) -> int:
        cur = 0
        highest = cur

        for a in gain:
            cur += a
            highest = max(highest, cur)
        
        return highest
