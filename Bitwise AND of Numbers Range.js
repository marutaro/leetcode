/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd = function(left, right) {
    while (right > left) {
        right &= right - 1;
    }
    return right;    
};
