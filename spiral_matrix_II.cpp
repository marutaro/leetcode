class Solution {
public:
    vector<vector<int>> generateMatrix(int n) {
        int x = 0, y = 0, dx = 1, dy = 0;
        vector<vector<int>> res(n, vector<int>(n, 0));

        for (int i = 0; i < n * n; i++) {
            res[y][x] = i + 1;

            if (!(0 <= x + dx && x + dx < n && 0 <= y + dy && y + dy < n && res[y+dy][x+dx] == 0)) {
                int temp = dx;
                dx = -dy;
                dy = temp;
            }
            
            x += dx;
            y += dy;
        }

        return res;        
    }
};
