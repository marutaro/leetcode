class Solution {
public:
    int numberOfBeams(vector<string>& bank) {
        int res = 0;
        int prev = 0;

        for (int r = 0; r < bank.size(); r++) {
            int cur = 0;
            for (int c = 0; c < bank[0].length(); c++) {
                if (bank[r][c] == '1') {
                    cur += 1;
                }
            }

            res += cur * prev;

            if (cur > 0) {
                prev = cur;
            }
        }

        return res;        
    }
};
