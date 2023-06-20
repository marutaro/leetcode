class Solution:
    def getAverages(self, nums: List[int], k: int) -> List[int]:
        n = len(nums)
        avgs = [-1] * n
        target_length = k * 2 + 1
        total = sum(nums[0:target_length])

        for c in range(k, n):
            if c + k < n:
                avgs[c] = total // target_length
                if c + k + 1 >= n:
                    break
                total -= nums[c - k]
                total += nums[c + k + 1]
        
        return avgs
