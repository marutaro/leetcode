class Solution {
public:
    bool makeEqual(vector<string>& words) {
        unordered_map<char, int> chars;

        for (const string& word : words) {
            for (char c : word) {
                chars[c] = 1 + chars[c];
            }
        }

        int divider = words.size();

        for (const auto& entry : chars) {
            if (entry.second % divider != 0) {
                return false;
            }
        }

        return true;        
    }
};