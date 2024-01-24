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
var pseudoPalindromicPaths  = function(root) {
    function dfs(node, pairs) {
        if (!node) {
            return 0;
        }

        if (pairs.has(node.val)) {
            pairs.delete(node.val);
        } else {
            pairs.add(node.val);
        }

        if (!node.left && !node.right) {
            return pairs.size <= 1 ? 1 : 0;
        }

        const left = dfs(node.left, new Set(pairs));
        const right = dfs(node.right, new Set(pairs));

        return left + right;
    }

    return dfs(root, new Set());    
};
