/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {

    let i = nums.length - 1;
    while (i > 0 && nums[i-1] >= nums[i]) {
        i--;
    }
    if (i === 0) {
        nums.reverse();
        return;
    }
    let j = nums.length - 1;
    while (j >= i && nums[j] <= nums[i-1]) {
        j--;
    }
    [nums[i-1], nums[j]] = [nums[j], nums[i-1]];
    reverse(nums, i, nums.length-1);

    function reverse(nums, start, end) {
        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
            end--;
        }
    }
};
