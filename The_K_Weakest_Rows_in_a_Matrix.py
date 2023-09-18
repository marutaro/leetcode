class Solution:
    def kWeakestRows(self, mat: List[List[int]], k: int) -> List[int]:
        min_heap = []

        for i, row in enumerate(mat):
            soldiers_count = 0

            for j in range(len(row)):
                if row[j] == 1:
                    soldiers_count += 1
                else:
                    break
            
            heapq.heappush(min_heap, (soldiers_count, i))
        
        weakest_rows = [heapq.heappop(min_heap)[1] for _ in range(k)]

        return weakest_rows
