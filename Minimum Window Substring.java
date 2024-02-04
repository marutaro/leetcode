class Solution {
    public String minWindow(String s, String t) {
        // Edge case: if length of s is less than t, return empty string
        if (s.length() < t.length()) {
            return "";
        }

        // Store the count of characters needed to form the target string t
        Map<Character, Integer> charCount = new HashMap<>();
        for (char ch : t.toCharArray()) {
            charCount.put(ch, charCount.getOrDefault(ch, 0) + 1);
        }

        // Initialize the variables
        int targetCharsRemaining = t.length();
        int[] minWindow = {0, Integer.MAX_VALUE}; // Initialize minWindow as an array [start, end]
        int startIndex = 0;

        // Iterate through the string s using two pointers (start and end)
        for (int endIndex = 0; endIndex < s.length(); endIndex++) {
            char ch = s.charAt(endIndex);
            if (charCount.containsKey(ch) && charCount.get(ch) > 0) {
                targetCharsRemaining--;
            }
            charCount.put(ch, charCount.getOrDefault(ch, 0) - 1);

            // Check if all characters in target string t are found in the current window
            if (targetCharsRemaining == 0) {
                // Move the start pointer until the window is no longer valid
                while (true) {
                    char charAtStart = s.charAt(startIndex);
                    if (charCount.containsKey(charAtStart) && charCount.get(charAtStart) == 0) {
                        break;
                    }
                    charCount.put(charAtStart, charCount.getOrDefault(charAtStart, 0) + 1);
                    startIndex++;
                }

                // Update the minimum window if the current window is smaller
                if (endIndex - startIndex < minWindow[1] - minWindow[0]) {
                    minWindow[0] = startIndex;
                    minWindow[1] = endIndex;
                }

                // Move the start pointer to the right and adjust the counts
                charCount.put(s.charAt(startIndex), charCount.getOrDefault(s.charAt(startIndex), 0) + 1);
                targetCharsRemaining++;
                startIndex++;
            }
        }

        // Return the minimum window substring
        return minWindow[1] >= s.length() ? "" : s.substring(minWindow[0], minWindow[1] + 1);        
    }
}
