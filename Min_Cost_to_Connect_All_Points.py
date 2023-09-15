class Solution:
    def minCostConnectPoints(self, points: List[List[int]]) -> int:
        n = len(points)
        min_cost = 0 # return value
        visited = [False] * n # to track visited points
        pq = [(0, 0)] # to store edge(cost, vertex)
        cache = {0: 0}

        while pq:
            # Get the edge with the minimum cost from the pq
            cost, u = heapq.heappop(pq)

            # if the vertex has already been visited, skip it
            if visited[u]:
                continue
            
            visited[u] = True
            min_cost += cost

            # Iterate through all the other vertices
            for v in range(n):
                if not visited[v]:
                    # calculate the distance between current point(u) and neighbor point(v)
                    dist = abs(points[u][0] - points[v][0]) + abs(points[u][1] - points[v][1])
                    if dist < cache.get(v, dist + 1):
                        cache[v] = dist
                        heapq.heappush(pq, (dist, v))
        
        return min_cost
