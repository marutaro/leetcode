class Solution:
    def findWinners(self, matches: List[List[int]]) -> List[List[int]]:
        res = [[] for _ in range(2)]
        lose_times = {}

        for w, l in matches:
            if w not in lose_times:
                lose_times[w] = 0
            lose_times[l] = 1 + lose_times.get(l, 0)
        
        for player, lose_count in lose_times.items():
            if lose_count < 2:
                res[lose_count].append(player)
        
        return [sorted(res[0]), sorted(res[1])]
