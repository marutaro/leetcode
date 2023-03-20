import java.util.*;

class Solution {
    public List<Integer> findSubstring(String s, String[] words) {
        List<Integer> res = new ArrayList<>();
        
        if (s == null || words == null || words.length == 0) {
            return res;
        }
        
        Map<String, Integer> wordFreq = new HashMap<>();
        for (String word : words) {
            wordFreq.put(word, 1 + wordFreq.getOrDefault(word, 0));
        }
        
        int wordLen = words[0].length();
        int windowLen = words.length * wordLen;
        
        for (int i = 0; i <= s.length() - windowLen; i++) {
            Map<String, Integer> substrFreq = new HashMap<>();
            int j = i;
            
            while (j < i + windowLen) {
                String curWord = s.substring(j, j + wordLen);
                
                if (!wordFreq.containsKey(curWord)) {
                    break;
                }
                
                substrFreq.put(curWord, 1 + substrFreq.getOrDefault(curWord, 0));
                
                if (substrFreq.get(curWord) > wordFreq.get(curWord)) {
                    break;
                }
                
                j += wordLen;
            }
            
            if (j == i + windowLen) {
                res.add(i);
            }
        }
        
        return res;
    }
}
