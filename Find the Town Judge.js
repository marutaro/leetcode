/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    const trusted = new Array(n + 1).fill(0);

    for (const [a, b] of trust) {
        trusted[a] -= 1;
        trusted[b] += 1;
    }

    for (let i = 1; i <= n; i++) {
        if (trusted[i] === n - 1) {
            return i;
        }
    }

    return -1;    
};
