class Solution {
public:
    int minSubArrayLen(int target, vector<int>& nums) {
        int minLen = std::numeric_limits<int>::max();
        int left = 0;
        int curSum = 0;

        for (int right = 0; right < nums.size(); right++) {
            curSum += nums[right];

            while (curSum >= target) {
                if (right - left + 1 < minLen) {
                    minLen = right - left + 1;
                }
                curSum -= nums[left];
                left++;
            }
        }

        return minLen != std::numeric_limits<int>::max() ? minLen : 0;        
    }
};
