class Solution {
public:
    int minimumEffortPath(vector<vector<int>>& heights) {
        if (heights.empty()) {
            return 0;
        }
        
        int rows = heights.size();
        int cols = heights[0].size();
        std::priority_queue<std::vector<int>, std::vector<std::vector<int>>, std::greater<std::vector<int>>> minHeap; // {effort, row, col}
        minHeap.push({0, 0, 0});
        int maxEffort = 0;
        std::set<std::string> visited;

        while (!minHeap.empty()) {
            auto current = minHeap.top();
            minHeap.pop();
            int effort = current[0];
            int curRow = current[1];
            int curCol = current[2];

            maxEffort = std::max(maxEffort, effort);
            if (curRow == rows - 1 && curCol == cols - 1) {
                return maxEffort;
            }
            visited.insert(std::to_string(curRow) + "," + std::to_string(curCol));

            std::vector<std::vector<int>> directions = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
            for (const auto& direction : directions) {
                int newRow = curRow + direction[0];
                int newCol = curCol + direction[1];

                if (0 <= newRow && newRow < rows && 0 <= newCol && newCol < cols &&
                    visited.find(std::to_string(newRow) + "," + std::to_string(newCol)) == visited.end()) {
                    int newEffort = std::abs(heights[newRow][newCol] - heights[curRow][curCol]);
                    minHeap.push({newEffort, newRow, newCol});
                }
            }
        }
        
        return maxEffort;        
    }
};
