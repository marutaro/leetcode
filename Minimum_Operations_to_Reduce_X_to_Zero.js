/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function(nums, x) {
    const target = nums.reduce((acc, num) => acc + num, 0) - x;
    
    if (target < 0) {
        return -1;
    }
    
    let left = 0;
    let curSum = 0;
    let maxSubLength = Number.NEGATIVE_INFINITY;
    const n = nums.length;
    
    for (let right = 0; right < n; right++) {
        curSum += nums[right];
        
        while (curSum > target) {
            curSum -= nums[left];
            left++;
        }
        
        if (curSum === target) {
            maxSubLength = Math.max(maxSubLength, right - left + 1);
        }
    }
    
    return maxSubLength === Number.NEGATIVE_INFINITY ? -1 : n - maxSubLength;    
};
