class Solution {
public:
    vector<int> eventualSafeNodes(vector<vector<int>>& graph) {
        int n = graph.size();
        std::vector<int> visited(n, 0); // 0: unvisited, 1: visiting, 2: terminal
        std::vector<int> result;

        for (int i = 0; i < n; i++) {
            if (isSafe(graph, visited, i)) {
                result.push_back(i);
            }
        }

        return result;        
    }

private:
    bool isSafe(std::vector<std::vector<int>>& graph, std::vector<int>& visited, int node) {
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
};
