class Solution {
public:
    vector<int> longestObstacleCourseAtEachPosition(vector<int>& obstacles) {
       int n = obstacles.size();
        vector<int> res(n, 0);
        vector<int> stack;

        for (int i = 0; i < n; i++) {
            int left = 0, right = stack.size() - 1;

            while (left <= right) {
                int mid = (left + right) / 2;
                if (stack[mid] <= obstacles[i]) {
                    left = mid + 1;
                }
                else {
                    right = mid - 1;
                }
            }
            
            res[i] = left + 1;

            if (left == stack.size()) {
                stack.push_back(obstacles[i]);
            }
            else {
                stack[left] = obstacles[i];
            }
        }
        
        return res;        
    }
};
