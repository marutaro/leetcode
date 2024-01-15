class Solution {
    public List<List<Integer>> findWinners(int[][] matches) {
        List<List<Integer>> res = new ArrayList<>();
        res.add(new ArrayList<>());
        res.add(new ArrayList<>());
        Map<Integer, Integer> loseTimes = new HashMap<>();

        for (int[] match : matches) {
            int w = match[0];
            int l = match[1];

            loseTimes.put(w, loseTimes.getOrDefault(w, 0));
            loseTimes.put(l, 1 + loseTimes.getOrDefault(l, 0));
        }

        for (Map.Entry<Integer, Integer> entry : loseTimes.entrySet()) {
            int player = entry.getKey();
            int loseCount = entry.getValue();

            if (loseCount < 2) {
                res.get(loseCount).add(player);
            }
        }

        Collections.sort(res.get(0));
        Collections.sort(res.get(1));

        return res;        
    }
}
