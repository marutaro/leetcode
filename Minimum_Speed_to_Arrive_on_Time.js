/**
 * @param {number[]} dist
 * @param {number} hour
 * @return {number}
 */
var minSpeedOnTime = function(dist, hour) {
    function canReachOnTime(speed) {
        let total_time = dist.slice(0, -1).reduce((acc, d) => acc + Math.ceil(d / speed), 0) + dist[dist.length - 1] / speed;
        return total_time <= hour;
    }

    let left = 1, right = 10 ** 7;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (canReachOnTime(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    if (canReachOnTime(left)) {
        return left;
    } else {
        return -1;
    }    
};
