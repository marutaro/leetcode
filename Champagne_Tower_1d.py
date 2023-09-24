class Solution:
    def champagneTower(self, poured: int, query_row: int, query_glass: int) -> float:
        glass_levels = [0.0] * 100
        glass_levels[0] = poured

        for cur_row in range(query_row):
            next_levels = [0.0] * 100

            for cur_glass in range(cur_row + 1):
                overflow = max(0, (glass_levels[cur_glass] - 1.0) / 2.0)
                next_levels[cur_glass] += overflow
                next_levels[cur_glass + 1] += overflow
            
            glass_levels = next_levels
        
        return min(1.0, glass_levels[query_glass])
