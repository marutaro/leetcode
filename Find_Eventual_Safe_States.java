class Solution {
    public List<Integer> eventualSafeNodes(int[][] graph) {
        int n = graph.length;
        int[] visited = new int[n]; // 0: unvisited, 1: visiting, 2: terminal
        List<Integer> result = new ArrayList<>();

        for (int i = 0; i < n; i++) {
            if (isSafe(graph, visited, i)) {
                result.add(i);
            }
        }

        return result;        
    }

    private boolean isSafe(int[][] graph, int[] visited, int node) {
        if (visited[node] > 0) {
            return visited[node] == 2;
        }

        visited[node] = 1;
        for (int neighbor : graph[node]) {
            if (!isSafe(graph, visited, neighbor)) {
                return false;
            }
        }

        visited[node] = 2;
        return true;
    }    
}
