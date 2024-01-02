/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    const res = [];
    const freq = {};

    for (const num of nums) {
        freq[num] = 1 + (freq[num] || 0);

        if (freq[num] > res.length) {
            res.push([]);
        }

        res[freq[num] - 1].push(num);
    }

    return res;    
};
