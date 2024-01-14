class Solution {
    public boolean closeStrings(String word1, String word2) {
        if (word1.length() != word2.length())
        return false;

        Map<Character, Integer> w1 = new HashMap<>();
        Map<Character, Integer> w2 = new HashMap<>();

        for (final char c : word1.toCharArray())
        w1.merge(c, 1, Integer::sum);

        for (final char c : word2.toCharArray())
        w2.merge(c, 1, Integer::sum);

        if (!w1.keySet().equals(w2.keySet()))
        return false;

        List<Integer> freqs1 = new ArrayList<>(w1.values());
        List<Integer> freqs2 = new ArrayList<>(w2.values());

        Collections.sort(freqs1);
        Collections.sort(freqs2);
        return freqs1.equals(freqs2);        
    }
}
