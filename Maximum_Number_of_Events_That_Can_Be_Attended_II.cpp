class Solution {
public:
    int maxValue(vector<vector<int>>& events, int k) {
        std::sort(events.begin(), events.end(), [](const std::vector<int>& a, const std::vector<int>& b) {
            return a[1] < b[1];
        });

        std::vector<std::vector<int>> dp = {{0, 0}};
        std::vector<std::vector<int>> dp2 = {{0, 0}};

        for (int _ = 0; _ < k; ++_) {
            for (const auto& event : events) {
                int start = event[0];
                int end = event[1];
                int value = event[2];

                int i = bisect(dp, start) - 1;

                if (dp[i][1] + value > dp2.back()[1]) {
                    dp2.push_back({end, dp[i][1] + value});
                }
            }

            dp.swap(dp2);
            dp2 = {{0, 0}};
        }

        return dp.back()[1];        
    }

private:
    int bisect(const std::vector<std::vector<int>>& arr, int target) {
        int low = 0;
        int high = arr.size();

        while (low < high) {
            int mid = low + (high - low) / 2;

            if (arr[mid][0] < target) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }

        return low;
    }
};
