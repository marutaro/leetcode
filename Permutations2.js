/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const backtrack = (start) => {
        if (start === nums.length) {
            res.push([...nums]);
            return;
        }
        
        for (let i = start; i < nums.length; i++) {
            [nums[start], nums[i]] = [nums[i], nums[start]];
            backtrack(start + 1);
            [nums[start], nums[i]] = [nums[i], nums[start]];
        }
    };

    const res = [];
    backtrack(0);
    return res;  
};
