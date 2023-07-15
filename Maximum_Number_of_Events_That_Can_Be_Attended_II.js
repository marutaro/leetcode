/**
 * @param {number[][]} events
 * @param {number} k
 * @return {number}
 */
var maxValue = function(events, k) {
    events.sort((a, b) => a[1] - b[1]);

    let dp = [[0, 0]];
    let dp2 = [[0, 0]];

    for (let _ = 0; _ < k; _++) {
      for (let [start, end, value] of events) {
        let i = bisect(dp, [start]) - 1;

        if (dp[i][1] + value > dp2[dp2.length - 1][1]) {
          dp2.push([end, dp[i][1] + value]);
        }
      }

      [dp, dp2] = [dp2, [[0, 0]]];
    }

    return dp[dp.length - 1][1];    
};

var bisect = function(arr, target) {
    var low = 0;
    var high = arr.length;

    while (low < high) {
        var mid = Math.floor((low + high) / 2);

        if (arr[mid][0] < target[0]) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }

    return low;
};
