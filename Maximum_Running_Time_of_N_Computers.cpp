class Solution {
public:
    long long maxRunTime(int n, vector<int>& batteries) {
        std::sort(batteries.begin(), batteries.end());
        std::vector<int> charging(batteries.begin() + batteries.size() - n, batteries.end());
        long total_extra = 0;
        
        for (int i = 0; i < batteries.size() - n; i++) {
            total_extra += batteries[i];
        }
        
        for (int i = 0; i < n - 1; i++) {
            if (total_extra / (i + 1) < charging[i + 1] - charging[i]) {
                return charging[i] + total_extra / (i + 1);
            }
            
            total_extra -= (i + 1) * (charging[i + 1] - charging[i]);
        }
        
        return charging.back() + total_extra / n;        
    }
};
