class Solution {
public:
    int countSubstrings(string s) {
        int res = 0;

        for (int i = 0; i < s.length(); i++) {
            res += count_palindrome(s, i, i); // Odd-length palindromes
            res += count_palindrome(s, i, i + 1); // Even-length palindromes
        }

        return res;        
    }

private:
    // Helper function to count palindromic substrings from a given center
    int count_palindrome(string s, int left, int right) {
        int count = 0;
        while (left >= 0 && right < s.length() && s[left] == s[right]) {
            count++;
            left--;
            right++;
        }
        return count;
    }

};
