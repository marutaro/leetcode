class Solution {
public:
    bool canMakeArithmeticProgression(vector<int>& arr) {
        int minimum = INT_MAX;
        int maximum = INT_MIN;
        int n = arr.size();

        for (int num : arr) {
            minimum = std::min(minimum, num);
            maximum = std::max(maximum, num);
        }

        int diff = (maximum - minimum) / (n - 1);
        std::unordered_set<int> nums(arr.begin(), arr.end());

        if (diff == 0) {
            return nums.size() == 1;
        }

        for (int i = minimum; i <= maximum; i += diff) {
            if (nums.find(i) == nums.end()) {
                return false;
            }
        }

        return true;        
    }
};
