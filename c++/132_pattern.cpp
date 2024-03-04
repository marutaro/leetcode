class Solution {
public:
    bool find132pattern(vector<int>& nums) {
        stack<pair<int, int>> st;
        int cur_min = nums[0];

        for (size_t i = 1; i < nums.size(); ++i) {
            int n = nums[i];
            while (!st.empty() && n >= st.top().first) {
                st.pop();
            }

            if (!st.empty() && n > st.top().second) {
                return true;
            }

            st.push(std::make_pair(n, cur_min));
            cur_min = std::min(cur_min, n);
        }

        return false;        
    }
};
