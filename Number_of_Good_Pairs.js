/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    const pairs = {};
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in pairs) {
            count += pairs[nums[i]];
        }
        
        pairs[nums[i]] = (pairs[nums[i]] || 0) + 1;
    }

    return count;    
};
