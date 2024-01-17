/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const counts = new Map();

    for (const n of arr) {
        counts.set(n, 1 + (counts.get(n) || 0));
    }

    return counts.size === new Set(counts.values()).size;    
};
