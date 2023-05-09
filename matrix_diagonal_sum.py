class Solution:
    def diagonalSum(self, mat: List[List[int]]) -> int:
        last_row = len(mat) - 1
        total = 0

        for i in range(len(mat)):
            total += mat[i][i]
            total += mat[last_row - i][i]

            if i == last_row - i:
                total -= mat[i][i]
        
        return total
