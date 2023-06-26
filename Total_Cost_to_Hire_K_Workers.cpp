class Solution {
public:
    long long totalCost(vector<int>& costs, int k, int candidates) {
        priority_queue<vector<int>, vector<vector<int>>, greater<vector<int>>> pq;

        for (int i = 0; i < candidates; i++) {
            pq.push({ costs[i], 0 });
        }

        for (int i = max(candidates, static_cast<int>(costs.size()) - candidates); i < costs.size(); i++) {
            pq.push({ costs[i], 1 });
        }

        long answer = 0;
        int nextHead = candidates;
        int nextTail = costs.size() - 1 - candidates;

        for (int i = 0; i < k; i++) {
            vector<int> curWorker = pq.top();
            pq.pop();
            int curCost = curWorker[0];
            int curSectionId = curWorker[1];
            answer += curCost;

            if (nextHead <= nextTail) {
                if (curSectionId == 0) {
                    pq.push({ costs[nextHead], 0 });
                    nextHead++;
                } else {
                    pq.push({ costs[nextTail], 1 });
                    nextTail--;
                }
            }
        }

        return answer;        
    }
};
