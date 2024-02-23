
// Solution 1
class Solution {
public:
    bool isAnagram(string s, string t) {
        if (s.length() != t.length()) {
            return false;
        }

        unordered_map<char, int> counter;

        for (char ch : s) {
            counter[ch] = counter[ch] + 1;
        }

        for (char ch : t) {
            if (counter.find(ch) == counter.end() || counter[ch] == 0) {
                return false;
            }
            counter[ch] = counter[ch] - 1;
        }

        return true;        
    }
};

// Solution 2
class Solution {
public:
    bool isAnagram(string s, string t) {
        if (s.length() != t.length()) {
            return false;
        }

        vector<int> count(26, 0);

        for (char c : s) {
            count[c - 'a'] += 1;
        }

        for (char c : t) {
            if (count[c - 'a'] == 0) {
                return false;
            }
            count[c - 'a'] -= 1;
        }

        return true;        
    }
};

// Solution 3
class Solution {
public:
    bool isAnagram(string s, string t) {
        if (s.length() != t.length()) {
            return false;
        }

        unordered_map<char, int> sCount, tCount;

        for (int i = 0; i < s.length(); i++) {
            sCount[s[i]] = 1 + sCount[s[i]];
            tCount[t[i]] = 1 + tCount[t[i]];
        }

        return sCount == tCount;        
    }
};
