/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {
    if (s.length !== goal.length) {
        return false;
    }
    
    if (s === goal) {
        // Check if there are duplicate characters in s
        if (new Set(s).size < s.length) {
            return true;
        } else {
            return false;
        }
    }
    
    // Find the indices of the differing characters
    let diff = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== goal[i]) {
            diff.push(i);
        }
    }
    
    // Check if there are exactly two differing characters
    if (diff.length !== 2) {
        return false;
    }
    
    // Check if swapping the characters results in equality
    return s[diff[0]] === goal[diff[1]] && s[diff[1]] === goal[diff[0]];    
};
