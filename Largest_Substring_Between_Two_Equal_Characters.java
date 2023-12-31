class Solution {
    public int maxLengthBetweenEqualCharacters(String s) {
        int[] idx = new int[26];
        int res = -1;

        for (int i = 0; i < s.length(); ++i) {
            if (idx[s.charAt(i) - 'a'] == 0) {
                idx[s.charAt(i) - 'a'] = i + 1;
            }
            res = Math.max(res, i - idx[s.charAt(i) - 'a']);
        }

        return res;        
    }
}
