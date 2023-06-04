class Solution {
public:
    int findCircleNum(vector<vector<int>>& isConnected) {
        std::unordered_set<int> visited;
        int provinces = 0;

        for (int i = 0; i < isConnected.size(); i++) {
            if (visited.find(i) == visited.end()) {
                dfs(i, isConnected, visited);
                provinces++;
            }
        }

        return provinces;        
    }

private:
    void dfs(int city, std::vector<std::vector<int>>& isConnected, std::unordered_set<int>& visited) {
        visited.insert(city);
        for (int cur = 0; cur < isConnected[city].size(); cur++) {
            int connected = isConnected[city][cur];
            if (connected == 1 && visited.find(cur) == visited.end()) {
                dfs(cur, isConnected, visited);
            }
        }
    }
};
