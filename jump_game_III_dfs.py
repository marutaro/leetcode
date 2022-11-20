class Solution:
    def canReach(self, arr: List[int], start: int) -> bool:

        visited = set()

        def dfs(i):
            if i >= len(arr) or i < 0 or i in visited:
                return False
            if arr[i] == 0:
                return True
            
            visited.add(i)

            left = i - arr[i]
            right = i + arr[i]

            if dfs(left) or dfs(right):
                return True
            
            return False
        
        return dfs(start)
