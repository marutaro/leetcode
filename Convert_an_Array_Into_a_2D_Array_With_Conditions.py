class Solution:
    def findMatrix(self, nums: List[int]) -> List[List[int]]:
        res = []
        freq = {}

        for num in nums:
            freq[num] = 1 + freq.get(num, 0)

            if freq[num] > len(res):
                res.append([])
            
            res[freq[num] - 1].append(num)
        
        return res
