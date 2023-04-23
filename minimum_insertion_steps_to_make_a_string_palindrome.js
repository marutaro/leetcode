/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
    const n = s.length;
    const dp = new Array(n).fill(0);

    for (let i = n - 2; i >= 0; i--) {
        let prev = 0;

        for (let j = i + 1; j < n; j++) {
            const temp = dp[j];

            if (s[i] === s[j]) {
                dp[j] = prev;
            } else {
                dp[j] = Math.min(dp[j], dp[j-1]) + 1;
            }

            prev = temp;
        }
    }

    return dp[n-1];    
};
