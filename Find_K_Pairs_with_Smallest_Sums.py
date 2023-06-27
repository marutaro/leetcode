class Solution:
    def kSmallestPairs(self, nums1: List[int], nums2: List[int], k: int) -> List[List[int]]:
        heap = []

        for i in range(len(nums1)):
            heapq.heappush(heap, (nums1[i] + nums2[0], nums1[i], nums2[0], 0))
        
        res = []
        while heap and len(res) < k:
            _, num1, num2, idx = heapq.heappop(heap)
            res.append([num1, num2])

            if idx + 1 < len(nums2):
                heapq.heappush(heap, (num1 + nums2[idx+1], num1, nums2[idx+1], idx+1))
        
        return res
