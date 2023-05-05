class Solution {
public:
    int maxVowels(string s, int k) {
        unordered_set<char> vowels {'a', 'e', 'i', 'o', 'u'};
        int max_vowels = 0;
        int cur_vowels = 0;

        for (int right = 0; right < s.length(); right++) {
            if (vowels.count(s[right])) {
                cur_vowels++;
            }

            if (right >= k && vowels.count(s[right - k])) {
                cur_vowels--;
            }

            max_vowels = max(max_vowels, cur_vowels);

            if (max_vowels == k) {
                return k;
            }
        }

        return max_vowels;        
    }
};
