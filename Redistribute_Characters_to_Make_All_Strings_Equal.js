/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function(words) {
    const chars = {};

    for (const word of words) {
        for (let i = 0; i < word.length; i++) {
            chars[word[i]] = 1 + (chars[word[i]] || 0);
        }
    }

    const divider = words.length;

    for (const freq of Object.values(chars)) {
        if (freq % divider !== 0) {
            return false;
        }
    }

    return true;    
};