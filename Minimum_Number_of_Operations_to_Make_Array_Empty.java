class Solution {
    public int minOperations(int[] nums) {
        HashMap<Integer, Integer> freq = new HashMap<>();

        for (int n : nums) {
            freq.put(n, 1 + freq.getOrDefault(n, 0));
        }

        if (freq.containsValue(1)) {
            return -1;
        }

        return freq.values().stream().mapToInt(f -> (f + 2) / 3).sum();        
    }
}
