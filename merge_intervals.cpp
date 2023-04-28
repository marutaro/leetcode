class Solution {
public:
    vector<vector<int>> merge(vector<vector<int>>& intervals) {
        if (intervals.empty()) {
            return {};
        }

        sort(intervals.begin(), intervals.end(), [](const vector<int>& a, const vector<int>& b) {
            return a[0] < b[0];
        }); // Sort intervals based on start times

        vector<vector<int>> merged;
        vector<int> mergedInterval = intervals[0]; // Initialize the first interval as the current merged interval

        for (int i = 1; i < intervals.size(); i++) {
            const vector<int>& interval = intervals[i];
            // If the current interval overlaps with the merged interval, merge them
            if (interval[0] <= mergedInterval[1]) {
                mergedInterval[1] = max(mergedInterval[1], interval[1]); // Update the end time
            } else {
                merged.push_back(mergedInterval); // Add the merged interval to the result list
                mergedInterval = interval; // Update the merged interval to the current interval
            }
        }

        merged.push_back(mergedInterval); // Add the last merged interval to the result list

        return merged;        
    }
};
