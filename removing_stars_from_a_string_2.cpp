class Solution {
public:
    string removeStars(string s) {
        int count = 0;
        string res = "";

        for (int i = s.length() - 1; i >= 0; i--) {
            if (s[i] == '*') {
                count++;
            } else if (count > 0) {
                count--;
            } else {
                res += s[i];
            }
        }

        reverse(res.begin(), res.end());
        return res; 
    }
};
