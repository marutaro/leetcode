class Solution {
    public int largestPathValue(String colors, int[][] edges) {
        Map<Integer, List<Integer>> graph = new HashMap<>();
        int[] indegree = new int[colors.length()];

        for (int[] edge : edges) {
            if (edge[0] == edge[1]) {
                return -1;
            }
            graph.computeIfAbsent(edge[0], k -> new ArrayList<>()).add(edge[1]);
            indegree[edge[1]]++;
        }

        Queue<Integer> q = new LinkedList<>();
        for (int i = 0; i < colors.length(); i++) {
            if (indegree[i] == 0) {
                q.offer(i);
            }
        }

        int[][] dp = new int[colors.length()][26];
        int max_color = 0;

        while (!q.isEmpty()) {
            int vertex = q.poll();
            int color = colors.charAt(vertex) - 'a';
            dp[vertex][color]++;
            max_color = Math.max(max_color, dp[vertex][color]);

            List<Integer> neighbors = graph.getOrDefault(vertex, new ArrayList<>());
            for (int nei : neighbors) {
                indegree[nei]--;
                for (int c = 0; c < 26; c++) {
                    dp[nei][c] = Math.max(dp[nei][c], dp[vertex][c]);
                }
                if (indegree[nei] == 0) {
                    q.offer(nei);
                }
            }
        }

        for (int i = 0; i < colors.length(); i++) {
            if (indegree[i] > 0) {
                return -1;
            }
        }

        return max_color;        
    }
}
