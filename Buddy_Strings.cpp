class Solution {
public:
    bool buddyStrings(string s, string goal) {
        if (s.length() != goal.length()) {
            return false;
        }
        
        if (s == goal) {
            // Check if there are duplicate characters in s
            if (hasDuplicateCharacters(s)) {
                return true;
            } else {
                return false;
            }
        }
        
        // Find the indices of the differing characters
        vector<int> diff;
        for (int i = 0; i < s.length(); i++) {
            if (s[i] != goal[i]) {
                diff.push_back(i);
            }
        }
        
        // Check if there are exactly two differing characters
        if (diff.size() != 2) {
            return false;
        }
        
        // Check if swapping the characters results in equality
        int firstIndex = diff[0];
        int secondIndex = diff[1];
        if (s[firstIndex] == goal[secondIndex] && s[secondIndex] == goal[firstIndex]) {
            return true;
        }
        
        return false;        
    }

private:
    bool hasDuplicateCharacters(string s) {
        unordered_set<char> characters;
        for (char c : s) {
            if (characters.count(c)) {
                return true;
            }
            characters.insert(c);
        }
        return false;
    }
};
