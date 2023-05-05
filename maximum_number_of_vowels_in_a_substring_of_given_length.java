class Solution {
    public int maxVowels(String s, int k) {
        Set<Character> vowels = new HashSet<>(Arrays.asList('a', 'e', 'i', 'o', 'u'));
        int max_vowels = 0;
        int cur_vowels = 0;

        for (int right = 0; right < s.length(); right++) {
            if (vowels.contains(s.charAt(right))) {
                cur_vowels++;
            }

            if (right >= k && vowels.contains(s.charAt(right - k))) {
                cur_vowels--;
            }

            max_vowels = Math.max(max_vowels, cur_vowels);

            if (max_vowels == k) {
                return k;
            }
        }

        return max_vowels;        
    }
}
