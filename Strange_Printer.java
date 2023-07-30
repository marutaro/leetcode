class Solution {
    public int strangePrinter(String s) {
        Map<String, Integer> memo = new HashMap<>();

        return min_turns_to_print(0, s.length() - 1, s, memo);        
    }

    private int min_turns_to_print(int start, int end, String s, Map<String, Integer> memo) {
        if (start > end) {
            return 0;
        }
        
        String key = start + "-" + end;
        if (memo.containsKey(key)) {
            return memo.get(key);
        }
        
        int res = min_turns_to_print(start, end - 1, s, memo) + 1;

        for (int middle = start; middle < end; middle++) {
            if (s.charAt(middle) == s.charAt(end)) {
                res = Math.min(res, min_turns_to_print(start, middle, s, memo) + min_turns_to_print(middle + 1, end - 1, s, memo));
            }
        }
        
        memo.put(key, res);
        return res;
    }    
}
