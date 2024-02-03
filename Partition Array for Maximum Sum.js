/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var maxSumAfterPartitioning = function(arr, k) {
    const n = arr.length;
    const maxSum = new Array(n + 1).fill(0);

    for (let i = 1; i <= n; i++) {
        let mpn = Number.MIN_SAFE_INTEGER;
        for (let mpnCount = 1; mpnCount <= Math.min(i, k); mpnCount++) {
            mpn = Math.max(mpn, arr[i - mpnCount]);
            maxSum[i] = Math.max(maxSum[i], maxSum[i - mpnCount] + mpn * mpnCount);
        }
    }

    return maxSum[n];    
};
