/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (!intervals || intervals.length === 0) {
        return [];
    }

    let merged = [];
    intervals.sort((a, b) => a[0] - b[0]); // Sort intervals based on start times

    // Initialize the first interval as the current merged interval
    let mergedInterval = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        let interval = intervals[i];
        // If the current interval overlaps with the merged interval, merge them
        if (interval[0] <= mergedInterval[1]) {
            mergedInterval[1] = Math.max(mergedInterval[1], interval[1]); // Update the end time
        } else {
            merged.push(mergedInterval); // Add the merged interval to the result list
            mergedInterval = interval; // Update the merged interval to the current interval
        }
    }

    merged.push(mergedInterval); // Add the last merged interval to the result list

    return merged;    
};
