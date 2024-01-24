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
    public int pseudoPalindromicPaths (TreeNode root) {
        return dfs(root, new HashSet<>());        
    }

    private int dfs(TreeNode node, Set<Integer> pairs) {
        if (node == null) {
            return 0;
        }

        if (pairs.contains(node.val)) {
            pairs.remove(node.val);
        } else {
            pairs.add(node.val);
        }

        if (node.left == null && node.right == null) {
            return pairs.size() <= 1 ? 1 : 0;
        }

        int left = dfs(node.left, new HashSet<>(pairs));
        int right = dfs(node.right, new HashSet<>(pairs));

        return left + right;
    }    
}
