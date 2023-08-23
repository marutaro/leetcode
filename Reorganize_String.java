class Solution {
    public String reorganizeString(String s) {
        Map<Character, Integer> charFreq = new HashMap<>();
        for (char c : s.toCharArray()) {
            charFreq.put(c, charFreq.getOrDefault(c, 0) + 1);
        }

        PriorityQueue<int[]> maxHeap = new PriorityQueue<>((a, b) -> b[1] - a[1]);
        for (Map.Entry<Character, Integer> entry : charFreq.entrySet()) {
            maxHeap.offer(new int[]{entry.getKey(), entry.getValue()});
        }

        StringBuilder res = new StringBuilder();
        int[] prev = new int[]{'#', 0};

        while (!maxHeap.isEmpty()) {
            int[] current = maxHeap.poll();
            res.append((char) current[0]);

            if (prev[1] > 0) {
                maxHeap.offer(prev);
            }

            current[1]--;
            prev = current;
        }

        if (res.length() != s.length()) {
            return "";
        }

        return res.toString();        
    }
}
