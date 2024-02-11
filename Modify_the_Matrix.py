class Solution:
    def modifiedMatrix(self, matrix: List[List[int]]) -> List[List[int]]:
        m = len(matrix) # row
        n = len(matrix[0]) # column
        answer = matrix.copy()

        for c in range(n):
            max_val = max(matrix[r][c] for r in range(m))
            for r in range(m):
                if matrix[r][c] == -1:
                    answer[r][c] = max_val
        
        return answer
