class Solution:
    def champagneTower(self, poured: int, query_row: int, query_glass: int) -> float:
        pyramid = [[0.0] * k for k in range(1, 101)]
        pyramid[0][0] = poured

        for row in range(query_row):
            for glass in range(row + 1):
                overflow = (pyramid[row][glass] - 1.0) / 2.0
                if overflow > 0:
                    pyramid[row + 1][glass] += overflow
                    pyramid[row + 1][glass + 1] += overflow
        
        return min(1.0, pyramid[query_row][query_glass])
