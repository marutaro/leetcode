/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let prevRob = 0;
    let maxRob = 0;

    for (const curValue of nums) {
        const temp = Math.max(maxRob, prevRob + curValue);
        prevRob = maxRob;
        maxRob = temp;
    }

    return maxRob;    
};
