class Solution:
    def furthestBuilding(self, heights: List[int], bricks: int, ladders: int) -> int:
        min_heap = []

        for i in range(1, len(heights)):
            diff = heights[i] - heights[i - 1]
            if diff <= 0:
                continue
            
            heapq.heappush(min_heap, diff)

            if len(min_heap) > ladders:
                bricks -= heapq.heappop(min_heap)
            
            if bricks < 0:
                return i - 1
        
        return len(heights) - 1
