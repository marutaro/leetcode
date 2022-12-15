class Solution:
    def rotate(self, matrix: List[List[int]]) -> None:
        edge_length = len(matrix)

        top = 0
        bottom = edge_length - 1

        while top < bottom:
            for col in range(edge_length):
                temp = matrix[top][col]
                matrix[top][col] = matrix[bottom][col]
                matrix[bottom][col] = temp
            top += 1
            bottom -= 1
        
        i = 0


        # 0,0 0,1, 0,2
        # 1,0 1,1, 1,2
        # 2,0 2,1, 2,2
        while i < edge_length:
            for j in range(i+1, edge_length):
                temp = matrix[i][j]
                matrix[i][j] = matrix[j][i]
                matrix[j][i] = temp
            i += 1
        
        return matrix
