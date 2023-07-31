/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function(s1, s2) {
    const m = s1.length;
    const n = s2.length;
    const dp = new Array(n + 1).fill(0);

    for (let j = 1; j <= n; j++) {
        dp[j] = dp[j - 1] + s2.charCodeAt(j - 1);
    }

    for (let i = 1; i <= m; i++) {
        let prev = dp[0];
        dp[0] += s1.charCodeAt(i - 1);

        for (let j = 1; j <= n; j++) {
            const temp = dp[j];

            if (s1[i - 1] === s2[j - 1]) {
                dp[j] = prev;
            } else {
                dp[j] = Math.min(dp[j] + s1.charCodeAt(i - 1), dp[j - 1] + s2.charCodeAt(j - 1));
            }

            prev = temp;
        }
    }

    return dp[n];    
};
