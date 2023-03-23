/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    return (s + s).substring(1, s.length * 2 - 1).includes(s);    
};
