// BFS
class Solution {
    public boolean isEvenOddTree(TreeNode root) {
        Queue<Pair<TreeNode, Integer>> q = new LinkedList<>();
        q.offer(new Pair<>(root, 0));

        while (!q.isEmpty()) {
            Integer prev = null;
            int size = q.size();
            for (int i = 0; i < size; i++) {
                Pair<TreeNode, Integer> pair = q.poll();
                TreeNode node = pair.getKey();
                int level = pair.getValue();

                if (level % 2 == 0) {
                    if (node.val % 2 == 0 || (prev != null && prev >= node.val)) {
                        return false;
                    }
                } else {
                    if (node.val % 2 == 1 || (prev != null && prev <= node.val)) {
                        return false;
                    }
                }

                prev = node.val;

                if (node.left != null) {
                    q.offer(new Pair<>(node.left, level + 1));
                }
                if (node.right != null) {
                    q.offer(new Pair<>(node.right, level + 1));
                }
            }
        }
        return true;        
    }
}

// DFS
class Solution {
    public boolean isEvenOddTree(TreeNode root) {
        List<Integer> prev = new ArrayList<>();
        return dfs(root, 0, prev);      
    }

    private boolean dfs(TreeNode node, int level, List<Integer> prev) {
        if (node == null) {
            return true;
        }

        if (prev.size() <= level) {
            prev.add(0);
        }

        if (level % 2 == 0) {
            if (node.val % 2 == 0 || (prev.get(level) != 0 && prev.get(level) >= node.val)) {
                return false;
            }
        } else {
            if (node.val % 2 == 1 || (prev.get(level) != 0 && prev.get(level) <= node.val)) {
                return false;
            }
        }

        prev.set(level, node.val);

        boolean isLeftValid = dfs(node.left, level + 1, prev);
        boolean isRightValid = dfs(node.right, level + 1, prev);

        return isLeftValid && isRightValid;
    }
}
