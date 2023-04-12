class Solution {
public:
    string removeStars(string s) {
        std::stack<char> st;

        for (char c : s) {
            if (c == '*') {
                if (!st.empty()) {
                    st.pop();
                }
            } else {
                st.push(c);
            }
        }

        std::string res;
        while (!st.empty()) {
            res += st.top();
            st.pop();
        }

        std::reverse(res.begin(), res.end());

        return res;        
    }
};
