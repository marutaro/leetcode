class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:

        res = []
        left = right = 0
        q = deque()

        while right < len(nums):
            while q and nums[right] > nums[q[-1]]:
                q.pop()
            q.append(right)

            if left > q[0]:
                q.popleft()
            
            if right + 1 >= k:
                res.append(nums[q[0]])
                left += 1
            right += 1
        
        return res
