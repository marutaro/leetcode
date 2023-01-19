class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:    
        ans = collections.defaultdict(list)

        for s in strs:
            count = [0] * 26

            # a = 100
            # b = 101 -> 101 - 100 = 1
            # c = 102 -> 102 - 100 = 2
            for c in s:
                count[ord(c) - ord("a")] += 1
            ans[tuple(count)].append(s)
        
        return ans.values()
