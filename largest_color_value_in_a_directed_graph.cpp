class Solution {
public:
    int largestPathValue(string colors, vector<vector<int>>& edges) {
        unordered_map<int, vector<int>> graph;
        int n = colors.size();
        int indegree[n];
        memset(indegree, 0, sizeof(indegree));

        for (auto edge : edges) {
            if (edge[0] == edge[1]) {
                return -1;
            }
            graph[edge[0]].push_back(edge[1]);
            indegree[edge[1]]++;
        }

        queue<int> q;
        for (int i = 0; i < n; i++) {
            if (indegree[i] == 0) {
                q.push(i);
            }
        }

        int dp[n][26];
        memset(dp, 0, sizeof(dp));
        int max_color = 0;

        while (!q.empty()) {
            int vertex = q.front();
            q.pop();
            int color = colors[vertex] - 'a';
            dp[vertex][color]++;
            max_color = max(max_color, dp[vertex][color]);

            for (auto nei : graph[vertex]) {
                indegree[nei]--;
                for (int c = 0; c < 26; c++) {
                    dp[nei][c] = max(dp[nei][c], dp[vertex][c]);
                }
                if (indegree[nei] == 0) {
                    q.push(nei);
                }
            }
        }

        for (int i = 0; i < n; i++) {
            if (indegree[i] > 0) {
                return -1;
            }
        }

        return max_color;        
    }
};
