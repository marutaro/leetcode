class TrieNode {
    Map<Character, TrieNode> children;
    boolean isWord;

    TrieNode() {
        children = new HashMap<>();
        isWord = false;
    }
}

class Solution {
    public int minExtraChar(String s, String[] dictionary) {
        TrieNode root = buildTrie(dictionary);
        int n = s.length();
        int[] dp = new int[n + 1];
        Arrays.fill(dp, Integer.MAX_VALUE);
        dp[n] = 0;

        for (int start = n - 1; start >= 0; start--) {
            dp[start] = dp[start + 1] + 1;
            TrieNode node = root;
            for (int end = start; end < n; end++) {
                char ch = s.charAt(end);
                if (!node.children.containsKey(ch)) {
                    break;
                }
                node = node.children.get(ch);
                if (node.isWord) {
                    dp[start] = Math.min(dp[start], dp[end + 1]);
                }
            }
        }

        return dp[0];        
    }

    private TrieNode buildTrie(String[] dictionary) {
        TrieNode root = new TrieNode();
        for (String word : dictionary) {
            TrieNode node = root;
            for (char ch : word.toCharArray()) {
                if (!node.children.containsKey(ch)) {
                    node.children.put(ch, new TrieNode());
                }
                node = node.children.get(ch);
            }
            node.isWord = true;
        }
        return root;
    }
}
