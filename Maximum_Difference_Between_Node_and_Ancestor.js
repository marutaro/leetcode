/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxAncestorDiff = function(root) {
    function dfs(node, min_val, max_val) {
        if (!node) {
            return max_val - min_val;
        }

        min_val = Math.min(node.val, min_val);
        max_val = Math.max(node.val, max_val);

        const left_diff = dfs(node.left, min_val, max_val);
        const right_diff = dfs(node.right, min_val, max_val);

        return Math.max(left_diff, right_diff);
    }

    if (!root) {
        return 0;
    }

    return dfs(root, root.val, root.val);    
};
