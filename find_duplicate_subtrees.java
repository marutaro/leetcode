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
    public List<TreeNode> findDuplicateSubtrees(TreeNode root) {
        List<TreeNode> res = new ArrayList<>();
        Map<String, List<TreeNode>> subtrees = new HashMap<>();

        traverse(root, subtrees);

        for (List<TreeNode> nodes : subtrees.values()) {
            if (nodes.size() > 1) {
                res.add(nodes.get(0));
            }
        }

        return res;        
    }

    private String traverse(TreeNode node, Map<String, List<TreeNode>> subtrees) {
        if (node == null) {
            return "#";
        }

        String key = node.val + "," + traverse(node.left, subtrees) + "," + traverse(node.right, subtrees);

        List<TreeNode> nodes = subtrees.getOrDefault(key, new ArrayList<>());
        nodes.add(node);
        subtrees.put(key, nodes);

        return key;
    }
}
