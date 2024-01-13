/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    const sCount = {};

    for (const c of s) {
        sCount[c] = 1 + (sCount[c] || 0);
    }

    let change = 0;
    for (const c of t) {
        if (!sCount[c] || sCount[c] === 0) {
            change += 1;
        } else {
            sCount[c] -= 1;
        }
    }

    return change;    
};
