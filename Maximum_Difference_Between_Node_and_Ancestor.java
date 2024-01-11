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
    public int maxAncestorDiff(TreeNode root) {
        return dfs(root, root.val, root.val);        
    }

    private int dfs(TreeNode node, int min_val, int max_val) {
        if (node == null) {
            return max_val - min_val;
        }

        min_val = Math.min(node.val, min_val);
        max_val = Math.max(node.val, max_val);

        int left_diff = dfs(node.left, min_val, max_val);
        int right_diff = dfs(node.right, min_val, max_val);

        return Math.max(left_diff, right_diff);
    }    
}
