
// solution 1
class Solution {
    public String firstPalindrome(String[] words) {
        for (String word : words) {
            if (word.equals(new StringBuilder(word).reverse().toString())) {
                return word;
            }
        }
        return "";        
    }
}

// solution 2
class Solution {
    public String firstPalindrome(String[] words) {
        for (String word : words) {
            int left = 0;
            int right = word.length() - 1;
            
            while (left < right) {
                if (word.charAt(left) != word.charAt(right)) {
                    break;
                }
                left++;
                right--;
            }
            if (left >= right) {
                return word;
            }
        }
        return "";        
    }
}
