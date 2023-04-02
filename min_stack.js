var MinStack = function() {
    this.st = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    let min_val = this.getMin();
    if (min_val === null || min_val > val) {
      min_val = val;
    }
    this.st.push([val, min_val]);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.st.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.st.length ? this.st[this.st.length - 1][0] : null;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.st.length ? this.st[this.st.length - 1][1] : null;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
