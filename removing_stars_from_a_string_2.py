class Solution:
    def removeStars(self, s: str) -> str:
        count = 0
        res = ""

        for i in range(len(s) -1, -1, -1):
            if s[i] == "*":
                count += 1
            elif count > 0:
                count -= 1
            else:
                res += s[i]
        
        return res[::-1]
