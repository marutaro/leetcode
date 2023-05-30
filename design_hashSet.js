var MyHashSet = function() {
    this.size = 1000;
    this.hashset = new Array(this.size).fill([]);    
};

// The value 5381 is often used in the "djb2" hashing algorithm
MyHashSet.prototype._hash = function(key) {
    let hash = 5381;
    key = key.toString();

    for (let i = 0; i < key.length; i++) {
        const char = key.charCodeAt(i);
        // In the context of the "djb2" hashing algorithm, the operation hash * 33 is a common step used to update the hash value 
        // during the iteration over the characters of the input data.
        hash = (hash * 33) ^ char;
    }

    return hash % this.size;    
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    const index = this._hash(key);
    const bucket = this.hashset[index];
    for (const value of bucket) {
        if (value === key) {
            return;
        }
    }
    bucket.push(key);    
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    const index = this._hash(key);
    const bucket = this.hashset[index];
    for (let i = 0; i < bucket.length; i++) {
        if (bucket[i] === key) {
            bucket.splice(i, 1);
            return;
        }
    }    
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    const index = this._hash(key);
    const bucket = this.hashset[index];
    for (const value of bucket) {
        if (value === key) {
            return true;
        }
    }
    return false;    
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
