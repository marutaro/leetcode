class Solution {
public:
    long long putMarbles(vector<int>& weights, int k) {
        int n = weights.size();
        vector<int> scores(n - 1, 0);

        for (int i = 0; i < n - 1; ++i) {
            scores[i] += weights[i] + weights[i + 1];
        }
        
        sort(scores.begin(), scores.end());
        
        long long answer = 0;
        for (int i = 0; i < k - 1; ++i) {
            answer += scores[n - 2 - i] - scores[i];
        }

        return answer;
    }
};
