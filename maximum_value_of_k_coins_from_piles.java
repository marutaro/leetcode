class Solution {
    public int maxValueOfCoins(List<List<Integer>> piles, int k) {
        int[] prev = new int[k + 1];

        for (List<Integer> pile : piles) {
            List<Integer> sumList = new ArrayList<>();
            sumList.add(0);
            int total = 0;
            for (int coin : pile) {
                total += coin;
                sumList.add(total);
            }

            int[] curMax = new int[k + 1];

            for (int n = 1; n <= k; n++) {
                int calcRange = Math.min(n + 1, sumList.size());
                for (int pos = 0; pos < calcRange; pos++) {
                    curMax[n] = Math.max(curMax[n], sumList.get(pos) + prev[n - pos]);
                }
            }

            prev = curMax;
        }

        return prev[k];        
    }
}
