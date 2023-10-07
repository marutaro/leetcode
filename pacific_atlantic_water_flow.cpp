class Solution {
public:
    vector<vector<int>> pacificAtlantic(vector<vector<int>>& heights) {
        vector<vector<int>> result;
        if (heights.empty() || heights[0].empty())
            return result;

        int rows = heights.size();
        int cols = heights[0].size();

        queue<pair<int, int>> pacificQueue;
        queue<pair<int, int>> atlanticQueue;
        vector<vector<bool>> pacificReachable(rows, vector<bool>(cols, false));
        vector<vector<bool>> atlanticReachable(rows, vector<bool>(cols, false));

        // Initialize the Pacific and Atlantic BFS queues with border points
        for (int i = 0; i < rows; i++) {
            pacificQueue.push({i, 0});
            atlanticQueue.push({i, cols - 1});
            pacificReachable[i][0] = true;
            atlanticReachable[i][cols - 1] = true;
        }

        for (int j = 0; j < cols; j++) {
            pacificQueue.push({0, j});
            atlanticQueue.push({rows - 1, j});
            pacificReachable[0][j] = true;
            atlanticReachable[rows - 1][j] = true;
        }

        bfs(heights, pacificQueue, pacificReachable);
        bfs(heights, atlanticQueue, atlanticReachable);

        // Find the intersection of the two reachable sets
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                if (pacificReachable[i][j] && atlanticReachable[i][j]) {
                    result.push_back({i, j});
                }
            }
        }

        return result;
    }

private:
    void bfs(vector<vector<int>>& heights, queue<pair<int, int>>& queue, vector<vector<bool>>& reachable) {
        int rows = heights.size();
        int cols = heights[0].size();
        vector<pair<int, int>> directions = {{0, 1}, {0, -1}, {1, 0}, {-1, 0}};

        while (!queue.empty()) {
            pair<int, int> current = queue.front();
            queue.pop();
            int row = current.first;
            int col = current.second;

            for (const auto& dir : directions) {
                int newRow = row + dir.first;
                int newCol = col + dir.second;

                if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols
                        && !reachable[newRow][newCol]
                        && heights[newRow][newCol] >= heights[row][col]) {
                    queue.push({newRow, newCol});
                    reachable[newRow][newCol] = true;
                }
            }
        }
    }
};
