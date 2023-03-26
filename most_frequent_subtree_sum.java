/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public int[] findFrequentTreeSum(TreeNode root) {
        Map<Integer, Integer> freq = new HashMap<>();
        dfs(root, freq);
        
        int maxFreq = Collections.max(freq.values());
        return freq.entrySet().stream()
            .filter(entry -> entry.getValue() == maxFreq)
            .mapToInt(entry -> entry.getKey())
            .toArray();        
    }

    private int dfs(TreeNode node, Map<Integer, Integer> freq) {
        if (node == null) {
            return 0;
        }
        
        // calculate the subtree sum recursively
        int leftSum = dfs(node.left, freq);
        int rightSum = dfs(node.right, freq);
        int subtreeSum = leftSum + rightSum + node.val;
        
        // increment the frequency of the subtree sum
        freq.put(subtreeSum, freq.getOrDefault(subtreeSum, 0) + 1);
        
        return subtreeSum;
    }
}
