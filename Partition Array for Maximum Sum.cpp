class Solution {
public:
    int maxSumAfterPartitioning(vector<int>& arr, int k) {
        int n = arr.size();
        vector<int> maxSum(n + 1);

        for (int i = 1; i <= n; i++) {
            int mpn = INT_MIN;
            for (int mpnCount = 1; mpnCount <= min(i, k); mpnCount++) {
                mpn = max(mpn, arr[i - mpnCount]);
                maxSum[i] = max(maxSum[i], maxSum[i - mpnCount] + mpn * mpnCount);
            }
        }

        return maxSum[n];        
    }
};
