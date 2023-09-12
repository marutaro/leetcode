class Solution {
public:
    int minDeletions(string s) {
        unordered_map<char, int> chars;
        for (char c : s) {
            chars[c]++;
        }

        unordered_set<int> uniqSet;
        int count = 0;

        for (const auto& pair : chars) {
            int freq = pair.second;
            while (freq > 0 && uniqSet.count(freq)) {
                freq--;
                count++;
            }
            uniqSet.insert(freq);
        }

        return count;        
    }
};
