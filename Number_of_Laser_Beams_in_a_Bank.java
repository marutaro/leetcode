class Solution {
    public int numberOfBeams(String[] bank) {
        int res = 0;
        int prev = 0;

        for (String r : bank) {
            int cur = 0;
            for (int c = 0; c < r.length(); c++) {
                if (r.charAt(c) == '1') {
                    cur += 1;
                }
            }

            res += cur * prev;

            if (cur > 0) {
                prev = cur;
            }
        }

        return res;        
    }
}
