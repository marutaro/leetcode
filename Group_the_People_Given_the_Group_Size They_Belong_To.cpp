class Solution {
public:
    vector<vector<int>> groupThePeople(vector<int>& groupSizes) {
        vector<vector<int>> res;
        unordered_map<int, vector<int>> groups;

        for (int i = 0; i < groupSizes.size(); i++) {
            int size = groupSizes[i];

            groups[size].push_back(i);

            if (groups[size].size() == size) {
                res.push_back(groups[size]);
                groups.erase(size);
            }
        }

        return res;        
    }
};
