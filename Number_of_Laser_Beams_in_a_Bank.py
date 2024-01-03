class Solution:
    def numberOfBeams(self, bank: List[str]) -> int:
        res = prev = 0

        for r in range(len(bank)):
            cur = 0
            for c in range(len(bank[0])):
                if bank[r][c] == "1":
                    cur += 1
            
            res += cur * prev

            if cur > 0:
                prev = cur
        
        return res
