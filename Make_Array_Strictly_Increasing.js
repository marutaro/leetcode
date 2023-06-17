/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var makeArrayIncreasing = function(arr1, arr2) {
    arr1 = [-1, ...arr1, Infinity];
    arr2 = [...new Set(arr2)].sort((a, b) => a - b);
    const n = arr1.length;
    const dp = new Array(n).fill(Infinity);
    dp[0] = 0;
    
    for (let i = 1; i < n; i++) {
        const j = search(arr2, arr1[i]);
        
        for (let k = 1; k <= Math.min(i - 1, j); k++) {
        if (arr1[i - k - 1] < arr2[j - k]) dp[i] = Math.min(dp[i], dp[i - k - 1] + k);
        }
        
        if (arr1[i - 1] < arr1[i]) dp[i] = Math.min(dp[i], dp[i - 1]);
    }
    
    return dp[n - 1] < Infinity ? dp[n - 1] : -1;
    };

    const search = (nums, target) => {
    let [low, high] = [0, nums.length];
    
    while (low < high) {
        const mid = (low + high) >>> 1;
        nums[mid] >= target ? (high = mid) : (low = mid + 1);
    }
    
    return low;    
};
