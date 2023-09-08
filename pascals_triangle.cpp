class Solution {
public:
    vector<vector<int>> generate(int numRows) {
        std::vector<std::vector<int>> res;
        res.push_back({1});

        for (int i = 0; i < numRows - 1; i++) {
            std::vector<int> dummyRow = {0};
            dummyRow.insert(dummyRow.end(), res.back().begin(), res.back().end());
            dummyRow.push_back(0);
            std::vector<int> row;

            for (int j = 0; j < dummyRow.size() - 1; j++) {
                row.push_back(dummyRow[j] + dummyRow[j + 1]);
            }

            res.push_back(row);
        }

        return res;        
    }
};
