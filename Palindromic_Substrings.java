class Solution {
    public int countSubstrings(String s) {
        int res = 0;

        for (int i = 0; i < s.length(); i++) {
            res += count_palindrome(s, i, i); // Odd-length palindromes
            res += count_palindrome(s, i, i + 1); // Even-length palindromes
        }

        return res;        
    }

    // Helper function to count palindromic substrings from a given center
    private int count_palindrome(String s, int left, int right) {
        int count = 0;
        while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {
            count++;
            left--;
            right++;
        }
        return count;
    }

}
