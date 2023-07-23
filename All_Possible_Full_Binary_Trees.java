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
    public List<TreeNode> allPossibleFBT(int n) {
        if (n % 2 == 0) {
            return new ArrayList<>();
        }

        Map<Integer, List<TreeNode>> memo = new HashMap<>();

        return generateFBT(n, memo);        
    }

    private List<TreeNode> generateFBT(int n, Map<Integer, List<TreeNode>> memo) {
        if (n == 1) {
            List<TreeNode> singleNodeList = new ArrayList<>();
            singleNodeList.add(new TreeNode(0));
            return singleNodeList;
        }

        if (memo.containsKey(n)) {
            return memo.get(n);
        }

        List<TreeNode> trees = new ArrayList<>();
        for (int left = 1; left < n; left += 2) {
            List<TreeNode> leftSubtrees = generateFBT(left, memo);
            List<TreeNode> rightSubtrees = generateFBT(n - left - 1, memo);

            for (TreeNode l : leftSubtrees) {
                for (TreeNode r : rightSubtrees) {
                    TreeNode root = new TreeNode(0, l, r);
                    trees.add(root);
                }
            }
        }

        memo.put(n, trees);
        return trees;
    }    
}
