/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var maxScore = function(nums1, nums2, k) {
    const pairs = nums1.map((x,i) => [x, nums2[i]]).sort((a,b) => b[1] - a[1]);
    let total = 0, res = 0;
    const queue = new MinPriorityQueue();
    
    for (const [n1, n2] of pairs) {
        queue.enqueue(n1);
        total += n1;

        if (queue.size() === k) {
            res = Math.max(res, total * n2);
            total -= queue.dequeue().element;
        }
    }

    return res;
};
