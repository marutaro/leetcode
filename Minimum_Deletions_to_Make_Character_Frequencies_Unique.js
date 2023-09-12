/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function(s) {
    const chars = new Map();
    for (const char of s) {
        chars.set(char, (chars.get(char) || 0) + 1);
    }

    const uniqSet = new Set();
    let count = 0;

    for (let freq of chars.values()) {
        while (freq > 0 && uniqSet.has(freq)) {
            freq--;
            count++;
        }

      uniqSet.add(freq);
    }

    return count;    
};
