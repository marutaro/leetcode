class Solution {
public:
    double average(vector<int>& salary) {
        int min_s = salary[0], max_s = salary[0];
        double total = 0;
        int count = 0;

        for (int s : salary) {
            if (s < min_s) {
                min_s = s;
            } else if (s > max_s) {
                max_s = s;
            }
            total += s;
            count++;
        }
        
        return (total - min_s - max_s) / (count - 2.0);        
    }
};
