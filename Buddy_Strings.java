class Solution {
    public boolean buddyStrings(String s, String goal) {
        if (s.length() != goal.length()) {
            return false;
        }
        
        if (s.equals(goal)) {
            // Check if there are duplicate characters in s
            if (hasDuplicateCharacters(s)) {
                return true;
            } else {
                return false;
            }
        }
        
        // Find the indices of the differing characters
        List<Integer> diff = new ArrayList<>();
        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) != goal.charAt(i)) {
                diff.add(i);
            }
        }
        
        // Check if there are exactly two differing characters
        if (diff.size() != 2) {
            return false;
        }
        
        // Check if swapping the characters results in equality
        int firstIndex = diff.get(0);
        int secondIndex = diff.get(1);
        if (s.charAt(firstIndex) == goal.charAt(secondIndex) && s.charAt(secondIndex) == goal.charAt(firstIndex)) {
            return true;
        }
        
        return false;        
    }

    private boolean hasDuplicateCharacters(String s) {
        Set<Character> characters = new HashSet<>();
        for (char c : s.toCharArray()) {
            if (characters.contains(c)) {
                return true;
            }
            characters.add(c);
        }
        return false;
    }    
}
