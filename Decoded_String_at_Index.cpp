class Solution {
public:
    string decodeAtIndex(string s, int k) {
        long long totalLength = 0;

        // Calculate the total length of the decoded string
        for (char c : s) {
            if (isdigit(c)) {
                totalLength *= (c - '0');
            } else {
                totalLength += 1;
            }
        }

        // Traverse the string in reverse to find the character at index k
        for (int i = s.length() - 1; i >= 0; i--) {
            k %= totalLength;

            if (k == 0 && isalpha(s[i])) {
                string result(1, s[i]);
                return result;
            }

            if (isdigit(s[i])) {
                totalLength /= (s[i] - '0');
            } else {
                totalLength -= 1;
            }
        }

        return "";        
    }
};
