class MyStack {
private:
    std::queue<int> q1;
    std::queue<int> q2;

public:
    MyStack() {}

    void push(int x) {
        q1.push(x);
    }

    int pop() {
        while (q1.size() > 1) {
            q2.push(q1.front());
            q1.pop();
        }

        int poppedVal = q1.front();
        q1.pop();
        std::swap(q1, q2);

        return poppedVal;
    }

    int top() {
        while (q1.size() > 1) {
            q2.push(q1.front());
            q1.pop();
        }

        int topVal = q1.front();
        q2.push(q1.front());
        q1.pop();
        std::swap(q1, q2);

        return topVal;
    }

    bool empty() {
        return q1.empty();
    }
};
