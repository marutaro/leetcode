/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if (num < 10) {
        return num;
    }

    let res = 0;
    while (num >= 10) {
        res = 0
        while (num !== 0) {
            res += num % 10;
            num = Math.floor(num / 10);
        }
        num = res;
    }
    
    return res;    
};
