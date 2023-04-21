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
    public int widthOfBinaryTree(TreeNode root) {
       if (root == null) {
            return 0;
        }

        int max_width = 1;
        Queue<TreeNode> queue = new LinkedList<>();
        Queue<Integer> indices = new LinkedList<>();
        queue.offer(root);
        indices.offer(0);

        while (!queue.isEmpty()) {
            int level_size = queue.size();
            int left_idx = indices.peek();
            int right_idx = indices.peek();

            for (int i = 0; i < level_size; i++) {
                TreeNode curr = queue.poll();
                int idx = indices.poll();
                right_idx = idx;

                if (curr.left != null) {
                    queue.offer(curr.left);
                    indices.offer(2 * idx + 1);
                }
                if (curr.right != null) {
                    queue.offer(curr.right);
                    indices.offer(2 * idx + 2);
                }
            }

            int width = right_idx - left_idx + 1;
            max_width = Math.max(max_width, width);
        }

        return max_width;        
    }
}
