class Solution {
public:
    bool validateStackSequences(vector<int>& pushed, vector<int>& popped) {
        std::stack<int> st;
        int i = 0;

        for (int n : pushed) {
            st.push(n);

            while (!st.empty() && st.top() == popped[i]) {
                st.pop();
                i++;
            }
        }

        return i == popped.size();
    }
};
