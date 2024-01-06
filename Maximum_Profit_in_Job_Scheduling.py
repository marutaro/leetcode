class Solution:
    def jobScheduling(self, startTime: List[int], endTime: List[int], profit: List[int]) -> int:
        max_profit = 0
        jobs = sorted([(s, e, p) for s, e, p in zip(startTime, endTime, profit)])
        heap = [] # (endTime, profit)

        for s, e, p in jobs:
            while heap and s >= heap[0][0]:
                max_profit = max(max_profit, heapq.heappop(heap)[1])
            
            heapq.heappush(heap, (e, p + max_profit))
        
        return max(p for _, p in heap)
