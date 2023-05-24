class Solution {
public:
    long long maxScore(vector<int>& nums1, vector<int>& nums2, int k) {
        int n = nums1.size();

        vector<vector<int>> pairs(n, vector<int>(2));
        for (int i = 0; i < n; i++) {
            pairs[i][0] = nums2[i];
            pairs[i][1] = nums1[i];
        }

        sort(pairs.begin(), pairs.end(), [](const vector<int>& a, const vector<int>& b) {
            return b[0] < a[0];
        });

        priority_queue<int, vector<int>, greater<int>> heap;
        long result = 0, totalSum = 0;

        for (const vector<int>& pair : pairs) {
            heap.push(pair[1]);
            totalSum += pair[1];

            if (heap.size() > k) {
                totalSum -= heap.top();
                heap.pop();
            }

            if (heap.size() == k) {
                result = max(result, totalSum * pair[0]);
            }
        }
        return result;        
    }
};
