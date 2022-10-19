class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        pref = strs[0]
        plen = len(pref)
        
        for s in strs[1:]:
            while pref != s[0:plen]:
                plen -= 1
                if plen == 0:
                    return ""
                
                pref = pref[0:plen]
        
        return pref
