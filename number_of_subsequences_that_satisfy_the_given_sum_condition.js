/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function(nums, target) {
    let pow = [];
    pow.push(1);

    nums.sort((a, b) => { return a - b; })

    const mod = 1e9+7;

    for (let i = 1; i < nums.length; i++) {
        pow.push((pow[pow.length - 1] * 2) % mod);
    }

    let left = 0, right = nums.length - 1, res = 0;

    while (left <= right) {
        if (nums[left] + nums[right] > target) {
            right--;
        } else {
            res = (res + pow[right - left]) % mod;
            left++;
        }
    }

    return res;
};

