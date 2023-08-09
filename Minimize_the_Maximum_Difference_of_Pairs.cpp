class Solution {
public:
    int minimizeMax(vector<int>& nums, int p) {
        sort(nums.begin(), nums.end());

        auto isFeasible = [&](int diff) {
            int count = 0;
            int i = 0;
            while (i < nums.size() - 1 && count < p) {
                if (nums[i + 1] - nums[i] <= diff) {
                    count++;
                    i += 2;
                } else {
                    i++;
                }
            }
            return count >= p;
        };

        int left = 0;
        int right = nums[nums.size() - 1] - nums[0];

        while (left < right) {
            int midDiff = (left + right) / 2;
            if (isFeasible(midDiff)) {
                right = midDiff;
            } else {
                left = midDiff + 1;
            }
        }

        return left;
    }
};
