class Solution {
public:
    int maxValueOfCoins(vector<vector<int>>& piles, int k) {
        std::vector<int> prev(k + 1, 0);

        for (const auto& pile : piles) {
            std::vector<int> sumList(1, 0);
            int total = 0;
            for (int coin : pile) {
                total += coin;
                sumList.push_back(total);
            }

            std::vector<int> curMax(k + 1, 0);

            for (int n = 1; n <= k; n++) {
                int calcRange = std::min(n + 1, static_cast<int>(sumList.size()));
                for (int pos = 0; pos < calcRange; pos++) {
                    curMax[n] = std::max(curMax[n], sumList[pos] + prev[n - pos]);
                }
            }

            prev = curMax;
        }

        return prev[k];        
    }
};
