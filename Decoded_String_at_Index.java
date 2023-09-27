class Solution {
    public String decodeAtIndex(String s, int k) {
        long totalLength = 0;

        // Calculate the total length of the decoded string
        for (char c : s.toCharArray()) {
            if (Character.isDigit(c)) {
                totalLength *= Character.getNumericValue(c);
            } else {
                totalLength += 1;
            }
        }

        // Traverse the string in reverse to find the character at index k
        for (int i = s.length() - 1; i >= 0; i--) {
            k %= totalLength;

            if (k == 0 && Character.isLetter(s.charAt(i))) {
                return String.valueOf(s.charAt(i));
            }

            if (Character.isDigit(s.charAt(i))) {
                totalLength /= Character.getNumericValue(s.charAt(i));
            } else {
                totalLength -= 1;
            }
        }

        return "";        
    }
}
