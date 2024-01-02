class Solution {
public:
    vector<vector<int>> findMatrix(vector<int>& nums) {
        vector<vector<int>> res;
        unordered_map<int, int> freq;

        for (int num : nums) {
            freq[num] = 1 + freq[num];

            if (freq[num] > res.size()) {
                res.push_back(vector<int>());
            }

            res[freq[num] - 1].push_back(num);
        }

        return res;        
    }
};
