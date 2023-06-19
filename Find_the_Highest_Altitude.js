/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let cur = 0;
    let highest = cur;

    for (let i = 0; i < gain.length; i++) {
        let a = gain[i];
        cur += a;
        highest = Math.max(highest, cur);
    }

    return highest;    
};
