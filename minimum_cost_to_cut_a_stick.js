/**
 * @param {number} n
 * @param {number[]} cuts
 * @return {number}
 */
var minCost = function(n, cuts) {
    cuts.push(0);
    cuts.push(n);
    cuts.sort((a, b) => a - b);

    const dp = Array.from({ length: cuts.length }, () => Array(cuts.length).fill(0));

    const dfs = (left, right) => {
        if (right - left <= 1) {
            return 0;
        }

        if (!dp[left][right]) {
            dp[left][right] = Infinity;

            for (let i = left + 1; i < right; i++) {
                const cost = cuts[right] - cuts[left];
                dp[left][right] = Math.min(dp[left][right], cost + dfs(left, i) + dfs(i, right));
            }
        }

        return dp[left][right];
    };

    return dfs(0, cuts.length - 1);    
};
