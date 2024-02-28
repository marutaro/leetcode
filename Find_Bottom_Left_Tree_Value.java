// Solution 1
class Solution {
    public int findBottomLeftValue(TreeNode root) {
        Queue<TreeNode> queue = new LinkedList<>();
        queue.add(root);
        int res = root.val;

        while (!queue.isEmpty()) {
            res = queue.peek().val;
            int levelSize = queue.size();
            for (int i = 0; i < levelSize; i++) {
                TreeNode node = queue.poll();
                if (node.left != null) {
                    queue.add(node.left);
                }
                if (node.right != null) {
                    queue.add(node.right);
                }
            }
        }

        return res;
    }
}

// Solution 2
class Solution {
    public int findBottomLeftValue(TreeNode root) {
        Queue<TreeNode> queue = new LinkedList<>();
        queue.add(root);
        int res = root.val;

        while (!queue.isEmpty()) {
            TreeNode node = queue.poll();
            res = node.val;
            if (node.right != null) {
                queue.add(node.right);
            }
            if (node.left != null) {
                queue.add(node.left);
            }
        }

        return res;
    }
}

// Solution 3
class Solution {
    int maxDepth = 0;
    int res = 0;            
    public int findBottomLeftValue(TreeNode root) {
        dfs(root, 1);
        return res;        
    }

    private void dfs(TreeNode node, int depth) {
        if (node == null) return;

        if (depth > maxDepth) {
            maxDepth = depth;
            res = node.val;
        }

        dfs(node.left, depth + 1);
        dfs(node.right, depth + 1);
    }    
}
