/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    const freq = new Map();

    for (const n of nums) {
        freq.set(n, 1 + (freq.get(n) || 0));
    }

    if ([...freq.values()].includes(1)) {
        return -1;
    }

    return [...freq.values()].reduce((sum, f) => sum + Math.floor((f + 2) / 3), 0);    
};
