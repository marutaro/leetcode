/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function(nums) {
    let res = 0;
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] == 0) {
        count += 1;
      } else {
        count = 0;
      }
      res += count;
    }

    return res;    
};
