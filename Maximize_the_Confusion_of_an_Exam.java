class Solution {
    public int maxConsecutiveAnswers(String answerKey, int k) {
        int windowSize = 0;
        Map<Character, Integer> count = new HashMap<>();

        for (int right = 0; right < answerKey.length(); right++) {
            char currentChar = answerKey.charAt(right);
            count.put(currentChar, count.getOrDefault(currentChar, 0) + 1);
            int minor = Math.min(count.getOrDefault('T', 0), count.getOrDefault('F', 0));

            if (minor <= k) {
                windowSize += 1;
            } else {
                char leftChar = answerKey.charAt(right - windowSize);
                count.put(leftChar, count.get(leftChar) - 1);
            }
        }

        return windowSize;      
    }
}
