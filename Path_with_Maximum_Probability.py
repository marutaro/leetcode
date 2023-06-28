class Solution:
    def maxProbability(self, n: int, edges: List[List[int]], succProb: List[float], start: int, end: int) -> float:
        graph = defaultdict(list)

        for i in range(len(edges)):
            s, e = edges[i]
            graph[s].append([e, succProb[i]])
            graph[e].append([s, succProb[i]])

        q = [(-1, start)]
        visited = set()

        while q:
            prob, node = heapq.heappop(q)
            visited.add(node)

            if node == end:
                return prob * -1

            for nei, p in graph[node]:
                if nei not in visited:
                    heapq.heappush(q, (prob * p, nei))

        return 0            
