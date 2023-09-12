class Solution:
    def minDeletions(self, s: str) -> int:
        chars = Counter(s)

        uniq_set = set()
        count = 0

        for freq in chars.values():
            while freq > 0 and freq in uniq_set:
                freq -= 1
                count += 1
            
            uniq_set.add(freq)

        return count
