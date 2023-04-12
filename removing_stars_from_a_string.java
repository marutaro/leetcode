class Solution {
    public String removeStars(String s) {
        Stack<Character> st = new Stack<>();

        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if (c == '*') {
                if (!st.isEmpty()) {
                    st.pop();
                }
            } else {
                st.push(c);
            }
        }

        StringBuilder sb = new StringBuilder();
        for (Character c : st) {
            sb.append(c);
        }

        return sb.toString();        
    }
}
