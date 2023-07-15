class Solution {
    public int maxValue(int[][] events, int k) {
        int n = events.length;
        Arrays.sort(events, (a, b) -> (a[1] - b[1]));
        TreeMap<Integer, Integer> dp = new TreeMap<>();
        TreeMap<Integer, Integer> dp2 = new TreeMap<>();
        dp.put(0, 0);
        dp2.put(0, 0);
        for (int i = 0; i < k; i++) {
            for (int j = 0; j < n; j++) {
                int cur = dp.lowerEntry(events[j][0]).getValue();
                if (cur + events[j][2] > dp2.lastEntry().getValue()) {
                    dp2.put(events[j][1], cur + events[j][2]);
                }
            }
            dp = dp2;
            dp2 = new TreeMap<>();
            dp2.put(0, 0);
        }
        return dp.lastEntry().getValue(); 
    }
}
