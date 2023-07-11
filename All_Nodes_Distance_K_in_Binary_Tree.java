/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    public List<Integer> distanceK(TreeNode root, TreeNode target, int k) {
        Map<TreeNode, List<TreeNode>> neighbors = new HashMap<>();

        buildNeighbors(root, null, neighbors);

        Queue<Pair<TreeNode, Integer>> queue = new LinkedList<>();
        Set<TreeNode> visited = new HashSet<>();
        List<Integer> res = new ArrayList<>();

        queue.offer(new Pair<>(target, 0));
        visited.add(target);

        while (!queue.isEmpty()) {
            Pair<TreeNode, Integer> pair = queue.poll();
            TreeNode node = pair.getKey();
            int dis = pair.getValue();

            if (dis == k) {
                res.add(node.val);
            }

            if (dis > k) {
                break;
            }

            for (TreeNode nei : neighbors.getOrDefault(node, new ArrayList<>())) {
                if (!visited.contains(nei)) {
                    visited.add(nei);
                    queue.offer(new Pair<>(nei, dis + 1));
                }
            }
        }

        return res;
        
    }

    private void buildNeighbors(TreeNode node, TreeNode parent, Map<TreeNode, List<TreeNode>> neighbors) {
        if (node == null) {
            return;
        }

        if (!neighbors.containsKey(node)) {
            neighbors.put(node, new ArrayList<>());
        }

        if (parent != null) {
            neighbors.get(node).add(parent);
            neighbors.get(parent).add(node);
        }

        buildNeighbors(node.left, node, neighbors);
        buildNeighbors(node.right, node, neighbors);
    }    
}
