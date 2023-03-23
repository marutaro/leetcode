/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    const n = s.length;

    for (let i = 1; i <= Math.floor(n / 2); i++) {
        if (n % i === 0 && s.slice(0, i).repeat(n / i) === s) {
            return true;
        }
    }
    
    return false;    
};
