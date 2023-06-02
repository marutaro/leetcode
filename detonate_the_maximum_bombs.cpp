class Solution {
public:
    int maximumDetonation(vector<vector<int>>& bombs) {
        std::unordered_map<int, std::vector<int>> reachableBombs;
        int n = bombs.size();

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (i == j) {
                    continue;
                }

                int xi = bombs[i][0];
                int yi = bombs[i][1];
                int ri = bombs[i][2];
                int xj = bombs[j][0];
                int yj = bombs[j][1];

                long long squaredDist = (long long)(xi - xj) * (xi - xj) + (long long)(yi - yj) * (yi - yj);
                long long squaredRadius = (long long)ri * ri;
                if (squaredRadius >= squaredDist) {
                    if (reachableBombs.find(i) == reachableBombs.end()) {
                        reachableBombs[i] = std::vector<int>();
                    }
                    reachableBombs[i].push_back(j);
                }
            }
        }

        int ans = 0;
        for (int i = 0; i < n; i++) {
            ans = std::max(ans, bfs(reachableBombs, i));
        }

        return ans;        
    }

private:
    int bfs(const std::unordered_map<int, std::vector<int>>& reachableBombs, int start) {
        std::unordered_set<int> visited;
        std::queue<int> queue;
        queue.push(start);
        visited.insert(start);

        while (!queue.empty()) {
            int cur = queue.front();
            queue.pop();

            auto it = reachableBombs.find(cur);
            if (it == reachableBombs.end()) {
                continue; // Skip if current bomb index has no reachable bombs
            }

            const std::vector<int>& neighbors = it->second;
            for (int nei : neighbors) {
                if (visited.find(nei) == visited.end()) {
                    queue.push(nei);
                    visited.insert(nei);
                }
            }
        }

        return visited.size();
    }    
};
