class Solution {
    public int minCostConnectPoints(int[][] points) {
        int n = points.length;
        int min_cost = 0;
        boolean[] visited = new boolean[n];
        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[0] - b[0]); // [cost, vertex]
        Map<Integer, Integer> cache = new HashMap<>();
        pq.offer(new int[]{0, 0});

        while (!pq.isEmpty()) {
            int[] edge = pq.poll();
            int cost = edge[0];
            int u = edge[1];

            if (visited[u]) {
                continue;
            }

            visited[u] = true;
            min_cost += cost;

            for (int v = 0; v < n; v++) {
                if (!visited[v]) {
                    int dist = Math.abs(points[u][0] - points[v][0]) + Math.abs(points[u][1] - points[v][1]);
                    if (dist < cache.getOrDefault(v, Integer.MAX_VALUE)) {
                        cache.put(v, dist);
                        pq.offer(new int[]{dist, v});
                    }
                }
            }
        }

        return min_cost;
    }
}
