class Solution:
    def findSmallestSetOfVertices(self, n: int, edges: List[List[int]]) -> List[int]:
        indegree = [0] * n
        res = []

        for edge in edges:
            indegree[edge[1]] += 1
        
        for i in range(n):
            if indegree[i] == 0:
                res.append(i)
        
        return res
