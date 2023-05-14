/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    let res = 0;
    intervals.sort((a, b) => a[1] - b[1]);
    let prev_end = intervals[0][1];

    for (let i = 1; i < intervals.length; i++) {
        if (prev_end > intervals[i][0]) {
            res++;
        } else {
            prev_end = intervals[i][1];
        }
    }

    return res;    
};
