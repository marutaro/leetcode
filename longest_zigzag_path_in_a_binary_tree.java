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
    int max_length = 0;    
    
    public int longestZigZag(TreeNode root) {

        if (root == null) {
            return 0;
        }
        
        dfs(root, true, 0);
        return max_length;        
    }

    private void dfs(TreeNode node, boolean is_left, int length) {
        if (node == null) {
            return;
        }
        
        max_length = Math.max(max_length, length);
        
        if (is_left) {
            dfs(node.left, false, length + 1);
            dfs(node.right, true, 1);
        } else {
            dfs(node.right, true, length + 1);
            dfs(node.left, false, 1);
        }
    }    
}
