class Solution {
    public String removeDuplicates(String s, int k) {
        if (s.length() < k) {
            return s;
        }

        List<int[]> st = new ArrayList<>();

        for (char c : s.toCharArray()) {
            if (!st.isEmpty() && c == st.get(st.size() - 1)[0]) {
                st.get(st.size() - 1)[1]++;

                if (st.get(st.size() - 1)[1] == k) {
                    st.remove(st.size() - 1);
                }
            } else {
                st.add(new int[] {c, 1});
            }
        }

        StringBuilder res = new StringBuilder();
        for (int[] pair : st) {
            for (int i = 0; i < pair[1]; i++) {
                res.append((char) pair[0]);
            }
        }

        return res.toString();        
    }
}
