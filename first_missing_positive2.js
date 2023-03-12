class Solution {
  firstMissingPositive(nums) {
    nums = nums.filter(n => n > 0);

    for (let n of nums) {
      const idx = Math.abs(n) - 1;
      if (idx < nums.length && nums[idx] > 0) {
        nums[idx] *= -1;
      }
    }
    
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > 0) {
        return i + 1;
      }
    }
    
    return nums.length + 1;
  }
}
