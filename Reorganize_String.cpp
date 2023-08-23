class Solution {
public:
    string reorganizeString(string s) {
        unordered_map<char, int> charFreq;
        for (char c : s) {
            charFreq[c]++;
        }

        auto comp = [](const pair<char, int>& a, const pair<char, int>& b) {
            return a.second < b.second;
        };

        priority_queue<pair<char, int>, vector<pair<char, int>>, decltype(comp)> maxHeap(comp);
        for (const auto& entry : charFreq) {
            maxHeap.push({entry.first, entry.second});
        }

        string res = "";
        pair<char, int> prev = {'#', 0};

        while (!maxHeap.empty()) {
            pair<char, int> current = maxHeap.top();
            maxHeap.pop();
            res += current.first;

            if (prev.second > 0) {
                maxHeap.push(prev);
            }

            current.second--;
            prev = current;
        }

        if (res.size() != s.size()) {
            return "";
        }

        return res;        
    }
};
