/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let pi = 0;
    let ni = 1;
    let res = new Array(nums.length).fill(0);

    for (let n of nums) {
        if (n > 0) {
            res[pi] = n;
            pi += 2;
        } else {
            res[ni] = n;
            ni += 2;
        }
    }

    return res;    
};
