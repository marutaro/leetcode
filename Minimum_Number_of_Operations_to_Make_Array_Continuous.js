/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    const length = nums.length;
    let minOperations = length;
    const uniqueNums = new Set(nums);
    const sortedUniqueNums = Array.from(uniqueNums).sort((a, b) => a - b);
    let right = 0;

    for (let left = 0; left < sortedUniqueNums.length; left++) {
        while (right < sortedUniqueNums.length && sortedUniqueNums[right] < sortedUniqueNums[left] + length) {
            right++;
        }

        minOperations = Math.min(minOperations, length - (right - left));
    }

    return minOperations;    
};
