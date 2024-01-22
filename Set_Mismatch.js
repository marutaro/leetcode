/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    const actualSum = nums.reduce((sum, num) => sum + num, 0);
    const uniqueSum = [...new Set(nums)].reduce((sum, num) => sum + num, 0);
    const duplicate = actualSum - uniqueSum;

    const n = nums.length;
    const expectedSum = (n * (1 + n)) / 2;

    const missing = expectedSum + duplicate - actualSum;

    return [duplicate, missing];    
};
