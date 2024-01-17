class Solution {
    public boolean uniqueOccurrences(int[] arr) {
       Map<Integer, Integer> counts = new HashMap<>();

        for (int n : arr) {
            counts.put(n, 1 + counts.getOrDefault(n, 0));
        }

        return counts.size() == new HashSet<>(counts.values()).size();        
    }
}
