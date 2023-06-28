class Solution {
public:
    double maxProbability(int n, vector<vector<int>>& edges, vector<double>& succProb, int start, int end) {
        vector<pair<int , double>>adj[n];
        for(int i = 0;i<edges.size();i++)
        {
            adj[edges[i][0]].push_back({edges[i][1] , succProb[i]});
            adj[edges[i][1]].push_back({edges[i][0] , succProb[i]});
        }
        queue<pair<int , double>>q;
        vector<double>dis(n , 0.0); 
        dis[start] = 1.0;  
        q.push({start , 1.0});
        while(!q.empty())
        {
            int node = q.front().first;
            double d = q.front().second;
            q.pop();
            for(auto it:adj[node])
            {
                if(d * it.second > dis[it.first])
                {
                    dis[it.first] = d * it.second;
                    q.push({it.first , dis[it.first]});
                }
            }
        }
        if(dis[end] == 1e9)
        return 0.0;
        return dis[end];  
    }
};
