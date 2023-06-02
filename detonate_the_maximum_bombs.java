class Solution {
    public int maximumDetonation(int[][] bombs) {
        Map<Integer, List<Integer>> reachableBombs = new HashMap<>();
        int n = bombs.length;

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (i == j) {
                    continue;
                }

                int xi = bombs[i][0];
                int yi = bombs[i][1];
                int ri = bombs[i][2];
                int xj = bombs[j][0];
                int yj = bombs[j][1];

                long squaredDist = (long)(xi - xj) * (xi - xj) + (long)(yi - yj) * (yi - yj);
                long squaredRadius = (long)ri * ri;
                if (squaredRadius >= squaredDist) {
                    if (!reachableBombs.containsKey(i)) {
                        reachableBombs.put(i, new ArrayList<>());
                    }
                    reachableBombs.get(i).add(j);
                }
            }
        }

        int ans = 0;
        for (int i = 0; i < n; i++) {
            ans = Math.max(ans, bfs(reachableBombs, i));
        }

        return ans;
    }

    private int bfs(Map<Integer, List<Integer>> reachableBombs, int start) {
        Set<Integer> visited = new HashSet<>();
        Queue<Integer> queue = new LinkedList<>();
        queue.add(start);
        visited.add(start);

        while (!queue.isEmpty()) {
            int cur = queue.poll();
            List<Integer> neighbors = reachableBombs.getOrDefault(cur, Collections.emptyList());
            for (int nei : neighbors) {
                if (!visited.contains(nei)) {
                    queue.add(nei);
                    visited.add(nei);
                }
            }
        }

        return visited.size();
    }
}
