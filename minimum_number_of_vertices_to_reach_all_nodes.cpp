class Solution {
public:
    vector<int> findSmallestSetOfVertices(int n, vector<vector<int>>& edges) {
        std::vector<int> indegree(n, 0);
        std::vector<int> res;

        for (const std::vector<int>& edge : edges) {
            indegree[edge[1]]++;
        }

        for (int i = 0; i < n; i++) {
            if (indegree[i] == 0) {
                res.push_back(i);
            }
        }

        return res;        
    }
};
