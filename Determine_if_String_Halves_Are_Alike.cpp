class Solution {
public:
    bool halvesAreAlike(string s) {
        int left = 0, leftVowels = 0, rightVowels = 0;
        int right = s.length() - 1;
        unordered_set<char> vowels {'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'};

        while (left < right) {
            if (vowels.count(s[left])) {
                leftVowels++;
            }
            if (vowels.count(s[right])) {
                rightVowels++;
            }

            left++;
            right--;
        }

        return leftVowels == rightVowels;        
    }
};
