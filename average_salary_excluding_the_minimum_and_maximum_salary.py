class Solution:
    def average(self, salary: List[int]) -> float:
        min_s = max_s = salary[0]
        total = count = 0

        for s in salary:
            if s < min_s:
                min_s = s
            elif s > max_s:
                max_s = s
            total += s
            count += 1
        
        return (total - min_s - max_s) / (count - 2) 
