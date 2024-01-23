class Solution {
    public int maxLength(List<String> arr) {
        List<String> uniqueComb = new ArrayList<>();
        uniqueComb.add("");

        int maxLengthResult = 0;

        for (int i = 0; i < arr.size(); i++) {
            int size = uniqueComb.size();
            for (int j = 0; j < size; j++) {
                String newComb = arr.get(i) + uniqueComb.get(j);

                Set<Character> charSet = new HashSet<>();
                for (char c : newComb.toCharArray()) {
                    charSet.add(c);
                }

                if (charSet.size() == newComb.length()) {
                    uniqueComb.add(newComb);
                    maxLengthResult = Math.max(maxLengthResult, newComb.length());
                }
            }
        }

        return maxLengthResult;        
    }
}
