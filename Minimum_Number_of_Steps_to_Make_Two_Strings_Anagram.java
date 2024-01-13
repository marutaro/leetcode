class Solution {
    public int minSteps(String s, String t) {
        Map<Character, Integer> sCount = new HashMap<>();

        for (char c : s.toCharArray()) {
            sCount.put(c, 1 + sCount.getOrDefault(c, 0));
        }

        int change = 0;
        for (char c : t.toCharArray()) {
            if (!sCount.containsKey(c) || sCount.get(c) == 0) {
                change += 1;
            } else {
                sCount.put(c, sCount.get(c) - 1);
            }
        }

        return change;        
    }
}
