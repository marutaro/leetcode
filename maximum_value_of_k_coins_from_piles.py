class Solution:
    def maxValueOfCoins(self, piles: List[List[int]], k: int) -> int:

        prev = [0] * (k + 1)

        for pile in piles:
            sum_list = [0]
            total = 0
            for coin in pile:
                total += coin
                sum_list.append(total)
        
            cur_max = [0] * (k + 1)

            for n in range(1, k + 1):
                calc_range = min(n + 1, len(sum_list))
                cur_max[n] = max(sum_list[pos] + prev[n - pos] for pos in range(calc_range))
            
            prev = cur_max
        
        return prev[k]
