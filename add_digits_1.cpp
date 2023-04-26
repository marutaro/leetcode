class Solution {
public:
    int addDigits(int num) {
        if (num < 10) {
            return num;
        }

        int res = 0;
        while (num >= 10) {
            res = 0;
            while (num != 0) {
                res += num % 10;
                num /= 10;
            }
            num = res;
        }
        
        return num;        
    }
};
