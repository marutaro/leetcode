class Solution {
public:
    int jobScheduling(vector<int>& startTime, vector<int>& endTime, vector<int>& profit) {
        int max_profit = 0;
        int n = startTime.size();
        vector<vector<int>> jobs(n, vector<int>(3));
        priority_queue<vector<int>, vector<vector<int>>, greater<>> heap;

        for (int i = 0; i < n; i++) {
            jobs[i] = {startTime[i], endTime[i], profit[i]};
        }

        sort(jobs.begin(), jobs.end(), [](const auto& a, const auto& b) {
            return a[0] < b[0];
        });

        for (const auto& job : jobs) {
            while (!heap.empty() && job[0] >= heap.top()[0]) {
                max_profit = max(max_profit, heap.top()[1]);
                heap.pop();
            }
            heap.push({job[1], job[2] + max_profit});
        }

        while (!heap.empty()) {
            max_profit = max(max_profit, heap.top()[1]);
            heap.pop();
        }

        return max_profit;        
    }
};
