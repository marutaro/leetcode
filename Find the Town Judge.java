class Solution {
    public int findJudge(int n, int[][] trust) {
        int[] trusted = new int[n + 1];

        for (int[] pair : trust) {
            trusted[pair[0]] -= 1;
            trusted[pair[1]] += 1;
        }

        for (int i = 1; i <= n; i++) {
            if (trusted[i] == n - 1) {
                return i;
            }
        }

        return -1;        
    }
}
