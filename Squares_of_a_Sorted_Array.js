var sortedSquares = function(nums) {
    let res = new Array(nums.length).fill(0);
    let left = 0;
    let right = nums.length - 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        if (Math.abs(nums[left]) > Math.abs(nums[right])) {
            res[i] = nums[left] ** 2;
            left++;
        } else {
            res[i] = nums[right] ** 2;
            right--;
        }
    }
    return res;    
};
