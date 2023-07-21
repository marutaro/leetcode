/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
    var dp = new Map();
    dp.set(-1, new Map());
    dp.get(-1).set(-Infinity, 1);
    var sortedNums = [];

    for (var num of nums) {
        var insertIndex = bisectLeft(sortedNums, num);
        if (insertIndex === sortedNums.length) {
            sortedNums.push(num);
        } else {
            sortedNums[insertIndex] = num;
        }

        var total = 0;
        for (var [prevNum, count] of dp.get(insertIndex - 1).entries()) {
            if (prevNum < num) {
                total += count;
            }
        }
        dp.set(insertIndex, dp.get(insertIndex) || new Map());
        dp.get(insertIndex).set(num, (dp.get(insertIndex).get(num) || 0) + total);
    }

    var result = 0;
    for (var count of dp.get(sortedNums.length - 1).values()) {
        result += count;
    }
    return result;    
};

var bisectLeft = function(arr, target) {
    var left = 0;
    var right = arr.length;

    while (left < right) {
        var mid = Math.floor((left + right) / 2);
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left;
};
