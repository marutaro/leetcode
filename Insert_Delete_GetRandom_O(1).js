class RandomizedSet {
    constructor() {
        this.values = [];
        this.valuesIdx = {}; // value: index
    }

    insert(val) {
        if (val in this.valuesIdx) {
            return false;
        }

        this.valuesIdx[val] = this.values.length;
        this.values.push(val);

        return true;
    }

    remove(val) {
        if (!(val in this.valuesIdx)) {
            return false;
        }

        const index = this.valuesIdx[val];
        this.valuesIdx[this.values[this.values.length - 1]] = index;
        delete this.valuesIdx[val];
        this.values[index] = this.values[this.values.length - 1];
        this.values.pop();

        return true;
    }

    getRandom() {
        const index = Math.floor(Math.random() * this.values.length);
        return this.values[index];
    }
}

// Example usage:
// const obj = new RandomizedSet();
// const param_1 = obj.insert(val);
// const param_2 = obj.remove(val);
// const param_3 = obj.getRandom();
