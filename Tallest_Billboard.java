class Solution {
    public int tallestBillboard(int[] rods) {
        Map<Integer, Integer> dp = new HashMap<>();
        dp.put(0, 0);

        for (int rod : rods) {
            Map<Integer, Integer> currDP = new HashMap<>(dp);

            for (Map.Entry<Integer, Integer> entry : dp.entrySet()) {
                int diff = entry.getKey();
                int highest = entry.getValue();

                int leftDiff = diff + rod;
                currDP.put(leftDiff, Math.max(currDP.getOrDefault(leftDiff, 0), highest + rod));

                int rightRod = highest - diff + rod;
                int rightDiff = Math.abs(highest - rightRod);
                currDP.put(rightDiff, Math.max(currDP.getOrDefault(rightDiff, 0), Math.max(highest, rightRod)));
            }

            dp = currDP;
        }

        return dp.get(0);        
    }
}
