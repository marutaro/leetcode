class Solution {
public:
    bool closeStrings(string word1, string word2) {
        if (word1.length() != word2.length()) {
            return false;
        }

        unordered_map<char, int> w1, w2;
        for (char c : word1) {
            w1[c] = 1 + w1[c];
        }

        for (char c : word2) {
            w2[c] = 1 + w2[c];
        }

        vector<char> w1Keys, w2Keys;
        for (auto& entry : w1) {
            w1Keys.push_back(entry.first);
        }

        for (auto& entry : w2) {
            w2Keys.push_back(entry.first);
        }

        sort(w1Keys.begin(), w1Keys.end());
        sort(w2Keys.begin(), w2Keys.end());

        if (w1Keys != w2Keys) {
            return false;
        }

        vector<int> w1Values, w2Values;
        for (auto& entry : w1) {
            w1Values.push_back(entry.second);
        }

        for (auto& entry : w2) {
            w2Values.push_back(entry.second);
        }

        sort(w1Values.begin(), w1Values.end());
        sort(w2Values.begin(), w2Values.end());

        return w1Values == w2Values;        
    }
};
