class Solution:
    def maxRunTime(self, n: int, batteries: List[int]) -> int:
        batteries.sort()
        charging = batteries[-n:]
        total_extra = sum(batteries[:-n])

        for i in range(n-1):
            if total_extra // (i + 1) < charging[i+1] - charging[i]:
                return charging[i] + total_extra // (i + 1)
            
            total_extra -= (charging[i+1] - charging[i]) * (i + 1)
        
        return charging[-1] + total_extra // n
