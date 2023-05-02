/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    let sign = 1;
    for (let n of nums) {
        if (n == 0) {
            return 0;
        }
        if (n < 0) {
            sign *= -1;
        }
    }
    return sign;    
};
