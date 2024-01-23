class Solution:
    def maxLength(self, arr: List[str]) -> int:
        uniq_comb = [""]
        max_length = 0

        for i in range(len(arr)):
            for j in range(len(uniq_comb)):
                new_comb = arr[i] + uniq_comb[j]

                if len(set(new_comb)) == len(new_comb):
                    uniq_comb.append(new_comb)
                    max_length = max(max_length, len(new_comb))
        
        return max_length
