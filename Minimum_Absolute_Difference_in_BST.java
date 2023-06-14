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
    private int min_diff;
    private Integer prev_val;

    public int getMinimumDifference(TreeNode root) {
        min_diff = Integer.MAX_VALUE;
        prev_val = null;

        inorder(root);
        return min_diff;
    }

    private void inorder(TreeNode node) {
        if (node.left != null) {
            inorder(node.left);
        }

        if (prev_val != null) {
            min_diff = Math.min(min_diff, node.val - prev_val);
        }
        prev_val = node.val;

        if (node.right != null) {
            inorder(node.right);
        }
    }    
}
