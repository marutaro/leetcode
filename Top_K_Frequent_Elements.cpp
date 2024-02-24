// Solution 1
class Solution {
public:
    vector<int> topKFrequent(vector<int>& nums, int k) {
        unordered_map<int, int> counter;
        for (int n : nums) {
            counter[n]++;
        }
        
        auto comp = [](pair<int, int>& a, pair<int, int>& b) {
            return a.second < b.second;
        };
        priority_queue<pair<int, int>, vector<pair<int, int>>, decltype(comp)> heap(comp);
        
        for (auto& entry : counter) {
            heap.push({entry.first, entry.second});
        }
        
        vector<int> res;
        while (k-- > 0) {
            res.push_back(heap.top().first);
            heap.pop();
        }
        
        return res;        
    }
};

// Solution 2
class Solution {
public:
    vector<int> topKFrequent(vector<int>& nums, int k) {
        unordered_map<int, int> counter;
        for (int n : nums) {
            counter[n]++;
        }
        
        vector<vector<int>> freq(nums.size() + 1);
        for (auto& entry : counter) {
            freq[entry.second].push_back(entry.first);
        }
        
        vector<int> res;
        for (int i = freq.size() - 1; i >= 0; i--) {
            for (int num : freq[i]) {
                res.push_back(num);
                if (res.size() == k) {
                    return res;
                }
            }
        }
        
        return {};        
    }
};
