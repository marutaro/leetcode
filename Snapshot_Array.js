/**
 * @param {number} length
 */
var SnapshotArray = function(length) {
    this.records = Array.from({ length }, () => [[0, 0]]);
    this.snap_id = 0;    
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function(index, val) {
    this.records[index].push([this.snap_id, val]);    
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function() {
    this.snap_id += 1;
    return this.snap_id - 1;    
};

/** 
 * @param {number} index 
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function(index, snap_id) {
    const record = this.records[index];
    let left = 0;
    let right = record.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (record[mid][0] <= snap_id) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return record[right][1];    
};

/** 
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */
