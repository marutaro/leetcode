class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:    
        ans = collections.defaultdict(list)

        for s in strs:
            key = "".join(sorted(s))
            ans[key].append(s)
        
        return ans.values()
