class Solution:
    def uniqueOccurrences(self, arr: List[int]) -> bool:
        counts = {}

        for n in arr:
            counts[n] = 1 + counts.get(n, 0)
        
        return len(counts) == len(set(counts.values()))
