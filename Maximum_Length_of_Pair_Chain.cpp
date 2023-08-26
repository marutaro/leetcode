class Solution {
public:
    int findLongestChain(vector<vector<int>>& pairs) {
        std::sort(pairs.begin(), pairs.end(), [](const std::vector<int>& a, const std::vector<int>& b) {
            return a[1] < b[1];
        });

        std::vector<int> prev = pairs[0];
        int res = 1;

        for (int i = 1; i < pairs.size(); i++) {
            const std::vector<int>& cur = pairs[i];
            if (cur[0] > prev[1]) {
                res++;
                prev = cur;
            }
        }

        return res;        
    }
};
