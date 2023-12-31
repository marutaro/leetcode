/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
    const idx = Array(26).fill(0);
    let res = -1;

    for (let i = 0; i < s.length; ++i) {
        if (idx[s.charCodeAt(i) - 'a'.charCodeAt(0)] === 0) {
            idx[s.charCodeAt(i) - 'a'.charCodeAt(0)] = i + 1;
        }
        res = Math.max(res, i - idx[s.charCodeAt(i) - 'a'.charCodeAt(0)]);
    }

    return res;    
};
