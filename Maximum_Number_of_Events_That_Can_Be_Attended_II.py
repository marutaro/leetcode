class Solution:
    def maxValue(self, events: List[List[int]], k: int) -> int:
        events.sort(key=lambda x: x[1])
        cur, temp = [[0, 0]], [[0, 0]]

        for _ in range(k):
            for start, end, value in events:
                i = bisect.bisect(cur, [start]) - 1
                if cur[i][1] + value > temp[-1][1]:
                    temp.append([end, cur[i][1] + value])
            
            cur, temp = temp, [[0, 0]]
        
        return cur[-1][-1]
