class Solution {
    public List<Integer> sequentialDigits(int low, int high) {
        String s = "123456789";
        List<Integer> res = new ArrayList<>();

        for (int i = 0; i < s.length(); i++) {
            for (int j = i + 1; j < s.length(); j++) {
                int num = Integer.parseInt(s.substring(i, j + 1));

                if (num > high) break;
                if (low <= num) res.add(num);
            }
        }

        res.sort(null);
        return res;        
    }
}
