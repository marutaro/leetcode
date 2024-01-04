class Solution {
public:
    int minOperations(vector<int>& nums) {
        unordered_map<int, int> freq;

        for (int n : nums) {
            freq[n] = 1 + freq[n];
        }

        if (any_of(freq.begin(), freq.end(), [](const auto& kv) { return kv.second == 1; })) {
            return -1;
        }

        return accumulate(freq.begin(), freq.end(), 0, [](int sum, const auto& kv) { return sum + (kv.second + 2) / 3; });        
    }
};
