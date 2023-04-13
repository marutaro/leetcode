class Solution {
    public boolean validateStackSequences(int[] pushed, int[] popped) {
        Stack<Integer> st = new Stack<>();
        int i = 0;

        for (int n : pushed) {
            st.push(n);

            while (!st.isEmpty() && st.peek() == popped[i]) {
                st.pop();
                i++;
            }
        }

        return i == popped.length;        
    }
}
