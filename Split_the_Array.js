/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossibleToSplit = function(nums) {
    let count = new Map();

    for (let n of nums) {
        count.set(n, (count.get(n) || 0) + 1);
    }
    
    for (let val of count.values()) {
        if (val > 2) {
            return false;
        }
    }
    
    return true;    
};
