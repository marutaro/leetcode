class Solution {
    public String reverseWords(String s) {
        // Split the input string into words and reverse each word
        String[] words = s.split(" ");
        StringBuilder result = new StringBuilder();
        for (String word : words) {
            StringBuilder reversedWord = new StringBuilder(word).reverse();
            result.append(reversedWord).append(" ");
        }
        result.deleteCharAt(result.length() - 1);  // Remove the extra space at the end
        
        // Convert StringBuilder to String
        return result.toString();        
    }
}
