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
    public int maxLevelSum(TreeNode root) {
        int res = 0;
        int curLevel = 0;
        int curMax = Integer.MIN_VALUE;
        Queue<TreeNode> queue = new LinkedList<>();
        
        queue.offer(root);
        
        while (!queue.isEmpty()) {
            int curTotal = 0;
            curLevel++;
            int size = queue.size();
            
            for (int i = 0; i < size; i++) {
                TreeNode node = queue.poll();
                curTotal += node.val;
                
                if (node.left != null) {
                    queue.offer(node.left);
                }
                if (node.right != null) {
                    queue.offer(node.right);
                }
            }
            
            if (curTotal > curMax) {
                res = curLevel;
                curMax = curTotal;
            }
        }
        
        return res;        
    }
}
