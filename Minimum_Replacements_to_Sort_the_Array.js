/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumReplacement = function(nums) {
    let currentLargest = nums[nums.length - 1];
    let totalReplacements = 0;
    
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] <= currentLargest) {
            currentLargest = nums[i];
            continue;
        }

        let numElements;
        if (nums[i] % currentLargest) {
            numElements = Math.floor(nums[i] / currentLargest) + 1;
            currentLargest = Math.floor(nums[i] / numElements);
        } else {
            numElements = Math.floor(nums[i] / currentLargest);
        }
        
        totalReplacements += numElements - 1;
    }
    
    return totalReplacements;    
};
