/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function(nums, k) {
    nums.sort((a, b) => a - b);
    const res = [];

    for (let i = 0; i < nums.length; i += 3) {
        if (nums[i] + k < nums[i + 2]) {
            return [];
        }

        res.push(nums.slice(i, i + 3));
    }
    
    return res;    
};
