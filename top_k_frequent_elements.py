class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        # return [x for x, y in Counter(nums).most_common(k)]
        
        count = {}
        
        for n in nums:
            count[n] = 1 + count.get(n, 0)
        
        #[1,1,1] [[],[],[]] 
        freq = [[] for _ in range(len(nums) + 1)]
        
        for n, c in count.items():
            freq[c].append(n)
            
        res = []
        
        for i in range(len(freq) - 1, -1, -1):
            for n in freq[i]:
                res.append(n)
                if len(res) == k:
                    return res
