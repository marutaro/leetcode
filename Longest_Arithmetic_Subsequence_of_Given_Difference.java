class Solution {
    public int longestSubsequence(int[] arr, int difference) {
        Map<Integer, Integer> dp = new HashMap<>();
        int maxLength = 0;

        for (int n : arr) {
            if (dp.containsKey(n - difference)) {
                dp.put(n, dp.get(n - difference) + 1);
            } else {
                dp.put(n, 1);
            }

            maxLength = Math.max(maxLength, dp.get(n));
        }

        return maxLength;        
    }
}
