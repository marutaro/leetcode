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
    public int amountOfTime(TreeNode root, int start) {
       Map<Integer, List<Integer>> nodeRelation = get_node_relation(root);
        int minutes = -1;
        Queue<Integer> q = new LinkedList<>();
        Set<Integer> visited = new HashSet<>();

        q.add(start);
        visited.add(start);

        while (!q.isEmpty()) {
            minutes += 1;
            int size = q.size();
            for (int i = 0; i < size; i++) {
                int curVal = q.poll();
                for (int relatedVal : nodeRelation.getOrDefault(curVal, Collections.emptyList())) {
                    if (visited.contains(relatedVal)) continue;
                    q.add(relatedVal);
                    visited.add(relatedVal);
                }
            }
        }

        return minutes;        
    }

    private Map<Integer, List<Integer>> get_node_relation(TreeNode root) {
        Map<Integer, List<Integer>> relation = new HashMap<>();
        Queue<Pair<TreeNode, Integer>> q = new LinkedList<>();
        q.add(new Pair<>(root, 0));

        while (!q.isEmpty()) {
            Pair<TreeNode, Integer> pair = q.poll();
            TreeNode node = pair.getKey();
            int parent = pair.getValue();

            if (parent != 0) {
                relation.computeIfAbsent(parent, k -> new ArrayList<>()).add(node.val);
                relation.computeIfAbsent(node.val, k -> new ArrayList<>()).add(parent);
            }

            if (node.left != null) q.add(new Pair<>(node.left, node.val));
            if (node.right != null) q.add(new Pair<>(node.right, node.val));
        }

        return relation;
    }    
}
