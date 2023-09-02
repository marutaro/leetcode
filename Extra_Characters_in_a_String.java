class Solution {
    public int minExtraChar(String s, String[] dictionary) {
        int maxLen = s.length() + 1;
        int[] dp = new int[maxLen];
        Arrays.fill(dp, maxLen);
        
        dp[0] = 0;
        Set<String> wordSet = new HashSet<>(Arrays.asList(dictionary));
        
        for (int i = 1; i < maxLen; i++) {
            dp[i] = dp[i - 1] + 1;
            
            for (int length = 1; length <= i; length++) {
                String substring = s.substring(i - length, i);
                if (wordSet.contains(substring)) {
                    dp[i] = Math.min(dp[i], dp[i - length]);
                }
            }
        }
        
        return dp[maxLen - 1];        
    }
}
