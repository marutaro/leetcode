class Node {
    constructor(key = -1, val = -1, next = null) {
        this.key = key;
        this.val = val;
        this.next = next;
    }
}

class MyHashMap {
    constructor() {
        this.map = new Array(1000).fill(null).map(() => new Node());
    }

    /** 
     * @param {number} key 
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        let cur = this.map[this.hash(key)];

        while (cur.next) {
            if (cur.next.key === key) {
                cur.next.val = value;
                return;
            }

            cur = cur.next;
        }

        cur.next = new Node(key, value);
    }

    /** 
     * @param {number} key
     * @return {number}
     */
    get(key) {
        let cur = this.map[this.hash(key)];

        while (cur.next) {
            if (cur.next.key === key) {
                return cur.next.val;
            }

            cur = cur.next;
        }

        return -1;
    }

    /** 
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        let cur = this.map[this.hash(key)];

        while (cur.next) {
            if (cur.next.key === key) {
                cur.next = cur.next.next;
                return;
            }

            cur = cur.next;
        }
    }

    /** 
     * @param {number} key
     * @return {number}
     */
    hash(key) {
        return key % this.map.length;
    }
}
