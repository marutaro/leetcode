class Solution {
    public String removeStars(String s) {
        int count = 0;
        StringBuilder res = new StringBuilder();

        for (int i = s.length() - 1; i >= 0; i--) {
            if (s.charAt(i) == '*') {
                count++;
            } else if (count > 0) {
                count--;
            } else {
                res.append(s.charAt(i));
            }
        }

        return res.reverse().toString();        
    }
}
