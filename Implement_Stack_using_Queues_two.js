class MyStack {
    constructor() {
        this.q1 = [];
        this.q2 = [];
    }

    push(x) {
        this.q1.push(x);
    }

    pop() {
        while (this.q1.length > 1) {
            this.q2.push(this.q1.shift());
        }

        const poppedVal = this.q1.shift();
        [this.q1, this.q2] = [this.q2, this.q1];

        return poppedVal;
    }

    top() {
        while (this.q1.length > 1) {
            this.q2.push(this.q1.shift());
        }

        const topVal = this.q1[0];
        this.q2.push(this.q1.shift());
        [this.q1, this.q2] = [this.q2, this.q1];

        return topVal;
    }

    empty() {
        return this.q1.length === 0;
    }
}
