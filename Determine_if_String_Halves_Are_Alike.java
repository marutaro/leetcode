class Solution {
    public boolean halvesAreAlike(String s) {
        int left = 0, leftVowels = 0, rightVowels = 0;
        int right = s.length() - 1;
        Set<Character> vowels = new HashSet<>();
        vowels.add('a'); vowels.add('e'); vowels.add('i'); vowels.add('o'); vowels.add('u');
        vowels.add('A'); vowels.add('E'); vowels.add('I'); vowels.add('O'); vowels.add('U');

        while (left < right) {
            if (vowels.contains(s.charAt(left))) {
                leftVowels++;
            }
            if (vowels.contains(s.charAt(right))) {
                rightVowels++;
            }

            left++;
            right--;
        }

        return leftVowels == rightVowels;        
    }
}
