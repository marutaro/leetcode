class Solution:
    def findTargetSumWays(self, nums: List[int], target: int) -> int:
        counter = {0:1}

        for n in nums:
            temp = {}

            for total, count in counter.items():
                temp[total + n] = temp.get(total + n, 0) + count
                temp[total - n] = temp.get(total - n, 0) + count
            counter = temp

        return counter.get(target, 0)                
