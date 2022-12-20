class Solution:
    def minJumps(self, arr: List[int]) -> int:
        if len(arr) == 1:
            return 0

        if arr[0] == arr[len(arr) - 1]:
            return 1

        q = collections.deque()
        visited = set()
        mapping = collections.defaultdict(list)

        for i in range(len(arr)):
            mapping[arr[i]].append(i)

        q.append(0)
        visited.add(0)

        def bfs():
            min_jumps = 0

            while q:
                for _ in range(len(q)):
                    idx = q.popleft()

                    if idx == len(arr) - 1:
                        return min_jumps
                    
                    next = idx + 1 # next index
                    prev = idx - 1 # previous index
                    same_val = mapping[arr[idx]] # same value indices

                    if next not in visited:
                        q.append(next)
                        visited.add(next)
                    
                    if prev >= 0 and prev not in visited:
                        q.append(prev)
                        visited.add(prev)
                    
                    if same_val:
                        for i in same_val:
                            if i not in visited:
                                q.append(i)
                                visited.add(i)
                        del mapping[arr[idx]]
                
                min_jumps += 1
            
            return min_jumps

        return bfs()            
