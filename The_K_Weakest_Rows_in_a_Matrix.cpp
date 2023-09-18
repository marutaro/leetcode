class Solution {
public:
    vector<int> kWeakestRows(vector<vector<int>>& mat, int k) {
        std::priority_queue<std::pair<int, int>, std::vector<std::pair<int, int>>, std::greater<std::pair<int, int>>> minHeap;

        for (int i = 0; i < mat.size(); i++) {
            int soldiersCount = 0;

            for (int j = 0; j < mat[i].size(); j++) {
                if (mat[i][j] == 1) {
                    soldiersCount++;
                } else {
                    break;
                }
            }

            minHeap.push({soldiersCount, i});
        }

        std::vector<int> weakestRows(k);
        for (int i = 0; i < k; i++) {
            weakestRows[i] = minHeap.top().second;
            minHeap.pop();
        }

        return weakestRows;        
    }
};
