class Solution {
public:
    int shortestPathBinaryMatrix(vector<vector<int>>& grid) {
        // Check if the starting or ending cell is blocked
        if (grid[0][0] == 1 || grid[grid.size() - 1][grid[0].size() - 1] == 1) {
            return -1;
        }

        int n = grid.size();
        vector<vector<int>> directions = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}, {1, 1}, {-1, -1}, {1, -1}, {-1, 1}};

        // Use a queue for BFS
        queue<vector<int>> q;
        q.push({0, 0, 1}); // {row, column, distance}
        grid[0][0] = 1; // Mark the starting cell as visited

        // BFS
        while (!q.empty()) {
            vector<int> curr = q.front();
            q.pop();
            int row = curr[0];
            int col = curr[1];
            int distance = curr[2];

            if (row == n - 1 && col == n - 1) {
                return distance; // Reached the ending cell
            }

            // Explore all possible neighbors
            for (const auto& dir : directions) {
                int newRow = row + dir[0];
                int newCol = col + dir[1];

                // Check if the neighbor is within the grid and not blocked
                if (newRow >= 0 && newRow < n && newCol >= 0 && newCol < n && grid[newRow][newCol] == 0) {
                    q.push({newRow, newCol, distance + 1});
                    grid[newRow][newCol] = 1;
                }
            }
        }

        return -1;        
    }
};
