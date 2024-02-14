class Solution {
public:
    vector<int> rearrangeArray(vector<int>& nums) {
        int pi = 0;
        int ni = 1;
        vector<int> res(nums.size(), 0);

        for (int n : nums) {
            if (n > 0) {
                res[pi] = n;
                pi += 2;
            } else {
                res[ni] = n;
                ni += 2;
            }
        }

        return res;        
    }
};
