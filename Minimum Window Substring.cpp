class Solution {
public:
    string minWindow(string s, string t) {
        // Edge case: if length of s is less than t, return empty string
        if (s.length() < t.length()) {
            return "";
        }

        // Store the count of characters needed to form the target string t
        unordered_map<char, int> charCount;
        for (char ch : t) {
            charCount[ch]++;
        }

        // Initialize the variables
        int targetCharsRemaining = t.length();
        int minWindow[2] = {0, INT_MAX}; // Initialize minWindow as an array [start, end]
        int startIndex = 0;

        // Iterate through the string s using two pointers (start and end)
        for (int endIndex = 0; endIndex < s.length(); endIndex++) {
            char ch = s[endIndex];
            if (charCount.find(ch) != charCount.end() && charCount[ch] > 0) {
                targetCharsRemaining--;
            }
            charCount[ch]--;

            // Check if all characters in target string t are found in the current window
            if (targetCharsRemaining == 0) {
                // Move the start pointer until the window is no longer valid
                while (true) {
                    char charAtStart = s[startIndex];
                    if (charCount.find(charAtStart) != charCount.end() && charCount[charAtStart] == 0) {
                        break;
                    }
                    charCount[charAtStart]++;
                    startIndex++;
                }

                // Update the minimum window if the current window is smaller
                if (endIndex - startIndex < minWindow[1] - minWindow[0]) {
                    minWindow[0] = startIndex;
                    minWindow[1] = endIndex;
                }

                // Move the start pointer to the right and adjust the counts
                charCount[s[startIndex]]++;
                targetCharsRemaining++;
                startIndex++;
            }
        }

        // Return the minimum window substring
        return minWindow[1] >= s.length() ? "" : s.substr(minWindow[0], minWindow[1] - minWindow[0] + 1);        
    }
};
