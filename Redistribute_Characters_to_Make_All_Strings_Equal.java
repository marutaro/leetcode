class Solution {
    public boolean makeEqual(String[] words) {
        Map<Character, Integer> chars = new HashMap<>();

        for (String word : words) {
            for (int i = 0; i < word.length(); i++) {
                chars.put(word.charAt(i), 1 + chars.getOrDefault(word.charAt(i), 0));
            }
        }

        int divider = words.length;

        for (int freq : chars.values()) {
            if (freq % divider != 0) {
                return false;
            }
        }

        return true;        
    }
}