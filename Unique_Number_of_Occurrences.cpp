class Solution {
public:
    bool uniqueOccurrences(vector<int>& arr) {
        unordered_map<int,int>counts;

        for(auto x: arr){
            counts[x]++;
        }  

        unordered_set<int>s;
        for(auto x: counts){
            s.insert(x.second);
        }
      
        return counts.size()==s.size();        
    }
};
