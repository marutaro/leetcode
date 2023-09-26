class Solution {
    public String removeDuplicateLetters(String s) {
        Map<Character, Integer> lastOccurrence = new HashMap<>();
        for (int i = 0; i < s.length(); i++) {
            lastOccurrence.put(s.charAt(i), i);
        }

        Stack<Character> stack = new Stack<>();
        Set<Character> visited = new HashSet<>();

        for (int i = 0; i < s.length(); i++) {
            if (visited.contains(s.charAt(i))) {
                continue;
            }

            while (!stack.isEmpty() && s.charAt(i) < stack.peek() && i < lastOccurrence.getOrDefault(stack.peek(), -1)) {
                visited.remove(stack.pop());
            }

            visited.add(s.charAt(i));
            stack.push(s.charAt(i));
        }

        StringBuilder result = new StringBuilder();
        for (char ch : stack) {
            result.append(ch);
        }
        return result.toString();        
    }
}
