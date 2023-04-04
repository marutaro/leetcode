class Solution {
public:
    string removeDuplicates(string s, int k) {
        if (s.length() < k) {
            return s;
        }

        std::vector<std::pair<char, int>> st;

        for (char c : s) {
            if (!st.empty() && c == st.back().first) {
                st.back().second++;

                if (st.back().second == k) {
                    st.pop_back();
                }
            } else {
                st.emplace_back(c, 1);
            }
        }

        std::string res;
        for (const auto& [char_val, count] : st) {
            res.append(count, char_val);
        }

        return res;        
    }
};
