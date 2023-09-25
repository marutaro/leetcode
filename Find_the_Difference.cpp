class Solution {
public:
    char findTheDifference(string s, string t) {
        std::unordered_map<char, int> count;
        
        for (char c : t) {
            count[c]++;
        }
        
        for (char c : s) {
            count[c]--;
            if (count[c] == 0) {
                count.erase(c);
            }
        }
        
        return count.begin()->first;        
    }
};
