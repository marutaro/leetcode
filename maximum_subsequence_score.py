class Solution:
    def maxScore(self, nums1: List[int], nums2: List[int], k: int) -> int:
        pairs = sorted(zip(nums1, nums2), key=lambda p: -p[1])

        total = res = 0
        heap = []

        for pair in pairs:
            nums1, nums2 = pair
            heapq.heappush(heap, nums1)
            total += nums1

            if len(heap) > k:
                total -= heapq.heappop(heap)
            
            if len(heap) == k:
                res = max(res, total * nums2)
        
        return res
