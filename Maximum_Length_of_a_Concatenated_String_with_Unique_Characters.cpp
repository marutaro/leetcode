class Solution {
public:
    int maxLength(vector<string>& arr) {
        vector<string> uniqueComb = {""};
        int maxLengthResult = 0;

        for (int i = 0; i < arr.size(); i++) {
            for (int j = 0; j < uniqueComb.size(); j++) {
                string newComb = arr[i] + uniqueComb[j];

                if (unordered_set<char>(newComb.begin(), newComb.end()).size() == newComb.length()) {
                    uniqueComb.push_back(newComb);
                    maxLengthResult = max(maxLengthResult, static_cast<int>(newComb.length()));
                }
            }
        }

        return maxLengthResult;        
    }
};
