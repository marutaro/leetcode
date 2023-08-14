/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    k = nums.length - k;

    for (let i = nums.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    function quick_select(left, right) {
        const pivot = nums[right];
        let p = left;

        for (let i = left; i < right; i++) {
            if (nums[i] <= pivot) {
                [nums[p], nums[i]] = [nums[i], nums[p]];
                p++;
            }
        }
        [nums[p], nums[right]] = [nums[right], nums[p]];

        if (p > k) {
            return quick_select(left, p - 1);
        } else if (p < k) {
            return quick_select(p + 1, right);
        } else {
            return nums[p];
        }
    }

    return quick_select(0, nums.length - 1);    
};
