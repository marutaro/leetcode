class Solution {
public:
    vector<vector<int>> findWinners(vector<vector<int>>& matches) {
        vector<vector<int>> res(2, vector<int>());
        unordered_map<int, int> loseTimes;

        for (const auto& match : matches) {
            int w = match[0];
            int l = match[1];

            loseTimes[w] = loseTimes[w];
            loseTimes[l] = 1 + loseTimes[l];
        }

        for (const auto& entry : loseTimes) {
            int player = entry.first;
            int loseCount = entry.second;

            if (loseCount < 2) {
                res[loseCount].push_back(player);
            }
        }

        sort(res[0].begin(), res[0].end());
        sort(res[1].begin(), res[1].end());

        return res;        
    }
};
