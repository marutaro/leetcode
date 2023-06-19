class Solution {
public:
    int largestAltitude(vector<int>& gain) {
        int cur = 0;
        int highest = cur;

        for (int i = 0; i < gain.size(); i++) {
            int a = gain[i];
            cur += a;
            highest = max(highest, cur);
        }

        return highest;        
    }
};
