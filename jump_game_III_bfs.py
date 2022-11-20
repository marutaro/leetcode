class Solution:
    def canReach(self, arr: List[int], start: int) -> bool:

        queue = [start]
        visited = set()

        while queue:
            i = queue.pop()
            jump = arr[i]

            if jump == 0: return True

            if i not in visited:
                visited.add(i)
                if i + jump < len(arr):
                    queue.append(i + jump)
                if i - jump >= 0:
                    queue.append(i - jump)
        
        return False
