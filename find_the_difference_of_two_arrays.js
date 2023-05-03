/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);

    const diff1 = new Set([...set1].filter(x => !set2.has(x)));
    const diff2 = new Set([...set2].filter(x => !set1.has(x)));

    return [Array.from(diff1), Array.from(diff2)];    
};
