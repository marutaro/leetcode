/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    const res = [[], []];
    const loseTimes = {};

    for (const match of matches) {
        const [w, l] = match;
        if (!(w in loseTimes)) {
            loseTimes[w] = 0;
        }
        loseTimes[l] = 1 + (loseTimes[l] || 0);
    }

    for (const [player, loseCount] of Object.entries(loseTimes)) {
        if (loseCount < 2) {
            res[loseCount].push(parseInt(player));
        }
    }

    return [res[0].sort((a, b) => a - b), res[1].sort((a, b) => a - b)];    
};
