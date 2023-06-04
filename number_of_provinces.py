class Solution:
    def findCircleNum(self, isConnected: List[List[int]]) -> int:
        visited = set()
        provinces = 0

        def dfs(city):
            visited.add(city)
            for cur, connected in enumerate(isConnected[city]):
                if connected and cur not in visited:
                    dfs(cur)
            
        for i in range(len(isConnected)):
            if i not in visited:
                dfs(i)
                provinces += 1

        return provinces
