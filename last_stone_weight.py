class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        if len(stones) == 1:
            return stones[0]
        
        stones = [-s for s in stones]
        heapq.heapify(stones)

        while len(stones) > 1:
            s1 = -(heapq.heappop(stones))
            s2 = -(heapq.heappop(stones))

            if s1 != s2:
                heapq.heappush(stones, -(s1-s2))
        
        return -(stones[0]) if stones else 0
