class Solution {
public:
    int minSteps(string s, string t) {
        unordered_map<char, int> sCount;

        for (char c : s) {
            sCount[c] = 1 + sCount[c];
        }

        int change = 0;
        for (char c : t) {
            if (sCount.find(c) == sCount.end() || sCount[c] == 0) {
                change += 1;
            } else {
                sCount[c] -= 1;
            }
        }

        return change;        
    }
};
