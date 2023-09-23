class Solution {
    public int longestStrChain(String[] words) {
        Map<String, Integer> chains = new HashMap<>();  // Stores the max chain length for each word
        String[] sortedWords = Arrays.copyOf(words, words.length);
        Arrays.sort(sortedWords, (a, b) -> a.length() - b.length());  // Sort words by length

        for (String word : sortedWords) {
            chains.put(word, 1);  // Initialize the chain length for the current word

            for (int i = 0; i < word.length(); i++) {
                String pred = word.substring(0, i) + word.substring(i + 1);  // Generate predecessor by removing one character
                if (chains.containsKey(pred)) {
                    chains.put(word, Math.max(chains.getOrDefault(word, 0), chains.get(pred) + 1));
                }
            }
        }

        int maxChainLength = chains.values().stream().mapToInt(Integer::intValue).max().orElse(0);
        return maxChainLength;        
    }
}
