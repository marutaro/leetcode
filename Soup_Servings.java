class Solution {
    public double soupServings(int n) {
        if (n >= 4300) {
            return 1.0;
        }

        Map<String, Double> memo = new HashMap<>();

        return serve(n, n, memo);        
    }

    private double serve(int A, int B, Map<String, Double> memo) {
        String key = A + "-" + B;
        if (memo.containsKey(key)) {
            return memo.get(key);
        }

        if (A <= 0 && B <= 0) {
            return 0.5;
        }
        if (A <= 0) {
            return 1.0;
        }
        if (B <= 0) {
            return 0.0;
        }

        double prob = 0.25 * (serve(A - 100, B, memo) + serve(A - 75, B - 25, memo) + serve(A - 50, B - 50, memo) + serve(A - 25, B - 75, memo));
        memo.put(key, prob);
        return prob;
    }

}
