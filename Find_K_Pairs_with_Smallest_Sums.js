/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    const minHeap = new MinPriorityQueue({ priority: x => x[0] });
    
    for (let i = 0; i < nums1.length; i++) {
        const num1 = nums1[i];
        const num2 = nums2[0];
        
        minHeap.enqueue([num1 + num2, i, 0]);
    }
    
    const n = nums2.length;
    const res = [];
    
    while (k > 0 && !minHeap.isEmpty()) {
        const [sum, idx1, idx2] = minHeap.dequeue().element;
        
        res.push([nums1[idx1], nums2[idx2]]);
        
        if (res.length === k) return res;
        
        if (idx2 < n - 1) {
            minHeap.enqueue([nums1[idx1] + nums2[idx2 + 1], idx1, idx2 + 1]);
        } 
    }
    
    return res;   
};
