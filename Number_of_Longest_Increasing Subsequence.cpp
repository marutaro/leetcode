class Solution {
public:
    int findNumberOfLIS(vector<int>& nums) {
        std::unordered_map<int, std::map<int, int>> dp;
        dp[-1][-INT_MAX] = 1;
        std::vector<int> sortedNums;

        for (int num : nums) {
            int insertIndex = bisectLeft(sortedNums, num);
            if (insertIndex == sortedNums.size()) {
                sortedNums.push_back(num);
            } else {
                sortedNums[insertIndex] = num;
            }

            int total = 0;
            for (const auto& entry : dp[insertIndex - 1]) {
                int prevNum = entry.first;
                int count = entry.second;
                if (prevNum < num) {
                    total += count;
                }
            }
            dp[insertIndex][num] += total;
        }

        int result = 0;
        for (const auto& entry : dp[sortedNums.size() - 1]) {
            result += entry.second;
        }
        return result;        
    }

private:
    int bisectLeft(const std::vector<int>& arr, int target) {
        int left = 0;
        int right = arr.size();

        while (left < right) {
            int mid = left + (right - left) / 2;
            if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        return left;
    }    
};
