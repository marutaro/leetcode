class Solution {
public:
    int maximalRectangle(vector<vector<char>>& matrix) {
        if (matrix.empty()) {
            return 0;
        }
        
        int n = matrix[0].size();
        vector<int> heights(n + 1);
        int maxArea = 0;
        
        for (auto row : matrix) {
            for (int i = 0; i < n; i++) {
                heights[i] = row[i] == '1' ? heights[i] + 1 : 0;
            }
            
            stack<int> st;
            st.push(-1);
            for (int i = 0; i < n + 1; i++) {
                while (st.top() != -1 && heights[i] < heights[st.top()]) {
                    int h = heights[st.top()];
                    st.pop();
                    int w = i - st.top() - 1;
                    maxArea = max(maxArea, h * w);
                }
                st.push(i);
            }
        }
        
        return maxArea;        
    }
};
