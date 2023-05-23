/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k = k;    
    this.queue = new MinPriorityQueue();

    for(let i = 0; i < nums.length; i++){
        this.queue.enqueue(nums[i]);
    }

    while(this.queue.size() > k) {
        this.queue.dequeue().element;
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.queue.enqueue(val);

    if(this.queue.size() > this.k) {
        this.queue.dequeue().element;
    }

    return this.queue.front().element;    
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
