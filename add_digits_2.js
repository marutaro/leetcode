/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if (num === 0) {
        return 0;
    }
    if (num % 9 === 0) {
        return 9;
    }
    return num % 9;   
};
