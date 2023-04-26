class Solution:
    def addDigits(self, num: int) -> int:
        if num < 10:
            return num

        while num >= 10:
            res = 0
            while num != 0:
                res += num % 10
                num //= 10
            num = res
        
        return res
