class MyQueue {

    private Queue<Integer> input;
    private Queue<Integer> output;

    public MyQueue() {
        input = new LinkedList<>();
        output = new LinkedList<>();
    }

    public void push(int x) {
        input.offer(x);
    }

    public int pop() {
        peek();
        return output.poll();
    }

    public int peek() {
        if (output.isEmpty()) {
            while (!input.isEmpty()) {
                output.offer(input.poll());
            }
        }
        return output.peek();
    }

    public boolean empty() {
        return input.isEmpty() && output.isEmpty();
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * MyQueue obj = new MyQueue();
 * obj.push(x);
 * int param_2 = obj.pop();
 * int param_3 = obj.peek();
 * boolean param_4 = obj.empty();
 */
