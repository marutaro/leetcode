class Solution {
public:
    int equalPairs(vector<vector<int>>& grid) {
        int count = 0;
        int n = grid.size();

        std::unordered_map<std::string, int> rowCounter;

        for (const auto& row : grid) {
            std::string rowString = vectorToString(row);
            rowCounter[rowString] = 1 + rowCounter[rowString];
        }

        for (int c = 0; c < n; c++) {
            std::vector<int> colArray(n);
            for (int r = 0; r < n; ++r) {
                colArray[r] = grid[r][c];
            }
            std::string colString = vectorToString(colArray);
            count += rowCounter[colString];
        }

        return count;        
    }

private:
    std::string vectorToString(const std::vector<int>& vec) {
        std::string result = "[";
        for (int i = 0; i < vec.size(); i++) {
            result += std::to_string(vec[i]);
            if (i < vec.size() - 1) {
                result += ", ";
            }
        }
        result += "]";
        return result;
    }    
};
