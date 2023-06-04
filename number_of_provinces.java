class Solution {
    public int findCircleNum(int[][] isConnected) {
        Set<Integer> visited = new HashSet<>();
        int provinces = 0;

        for (int i = 0; i < isConnected.length; i++) {
            if (!visited.contains(i)) {
                dfs(i, isConnected, visited);
                provinces++;
            }
        }

        return provinces;        
    }

    private void dfs(int city, int[][] isConnected, Set<Integer> visited) {
        visited.add(city);
        for (int cur = 0; cur < isConnected[city].length; cur++) {
            int connected = isConnected[city][cur];
            if (connected == 1 && !visited.contains(cur)) {
                dfs(cur, isConnected, visited);
            }
        }
    }    
}
