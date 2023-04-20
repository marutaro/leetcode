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
var longestZigZag = function(root) {
    if (!root) {
        return 0;
    }

    let max_length = 0;

    function dfs(node, is_left, length) {
        if (!node) {
            return;
        }

        max_length = Math.max(max_length, length);

        if (is_left) {
            dfs(node.left, false, length + 1);
            dfs(node.right, true, 1);
        } else {
            dfs(node.right, true, length + 1);
            dfs(node.left, false, 1);
        }
    }

    dfs(root, true, 0);
    return max_length;    
};
