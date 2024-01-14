/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    if (word1.length !== word2.length) {
        return false;
    }

    const w1 = {};
    for (const c of word1) {
        w1[c] = 1 + (w1[c] || 0);
    }

    const w2 = {};
    for (const c of word2) {
        w2[c] = 1 + (w2[c] || 0);
    }

    if (JSON.stringify(Object.keys(w1).sort()) !== JSON.stringify(Object.keys(w2).sort())) {
        return false;
    }

    return JSON.stringify(Object.values(w1).sort()) === JSON.stringify(Object.values(w2).sort());    
};
