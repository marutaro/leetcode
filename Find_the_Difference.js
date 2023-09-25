/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    const count = new Map();
    
    for (const char of t) {
        count.set(char, (count.get(char) || 0) + 1);
    }
    
    for (const char of s) {
        count.set(char, count.get(char) - 1);
        if (count.get(char) === 0) {
            count.delete(char);
        }
    }
    
    return Array.from(count.keys())[0];    
};
