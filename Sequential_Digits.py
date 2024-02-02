class Solution:
    def sequentialDigits(self, low: int, high: int) -> List[int]:
        s = "123456789"
        res = []

        for i in range(len(s)):
            for j in range(i + 1, len(s)):
                num = int(s[i:j+1])

                if num > high: break
                if low <= num:
                    res.append(num)
        
        return sorted(res)
