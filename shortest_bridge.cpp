class Solution {
public:
    int shortestBridge(vector<vector<int>>& grid) {
        int rows = grid.size();
        int cols = grid[0].size();
        deque<pair<int, int>> queue;
        unordered_set<string> visited;

        // Find any island and mark its cells as 2 and set starting positions
        function<void(int, int)> dfs = [&](int r, int c) {
            if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] != 1) {
                return;
            }
            grid[r][c] = 2;
            queue.push_back({r, c});
            visited.insert(to_string(r) + "," + to_string(c));
            dfs(r + 1, c);
            dfs(r - 1, c);
            dfs(r, c + 1);
            dfs(r, c - 1);
        };

        bool found = false;
        for (int r = 0; r < rows; r++) {
            if (found) {
                break;
            }
            for (int c = 0; c < cols; c++) {
                if (grid[r][c] == 1) {
                    dfs(r, c);
                    found = true;
                    break;
                }
            }
        }

        // Perform a BFS starting from the cells marked as 2
        int distance = 0;
        vector<pair<int, int>> directions = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
        while (!queue.empty()) {
            int size = queue.size();
            for (int i = 0; i < size; i++) {
                int row = queue.front().first;
                int col = queue.front().second;
                queue.pop_front();

                for (const auto& dir : directions) {
                    int newRow = row + dir.first;
                    int newCol = col + dir.second;

                    if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols &&
                            visited.find(to_string(newRow) + "," + to_string(newCol)) == visited.end()) {
                        if (grid[newRow][newCol] == 1) {
                            return distance;
                        }

                        queue.push_back({newRow, newCol});
                        visited.insert(to_string(newRow) + "," + to_string(newCol));
                    }
                }
            }
            distance++;
        }

        return -1;        
    }
};
