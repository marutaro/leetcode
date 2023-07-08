class Solution {
    public long putMarbles(int[] weights, int k) {
        int n = weights.length;
        int[] scores = new int[n - 1];

        for (int i = 0; i < n - 1; ++i) {
            scores[i] = weights[i] + weights[i + 1];
        }

        Arrays.sort(scores, 0, n - 1);
        
        long answer = 0l;
        for (int i = 0; i < k - 1; ++i) {
            answer += scores[n - 2 - i] - scores[i];
        }

        return answer;
    }
}
