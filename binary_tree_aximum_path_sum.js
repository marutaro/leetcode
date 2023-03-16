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
var maxPathSum = function(root) {
    let res = root.val;

    function dfs(node) {
        if (!node) {
            return 0;
        }

        // Recursively compute the maximum sum of the left and right subtree paths.
        let leftSum = Math.max(0, dfs(node.left));
        let rightSum = Math.max(0, dfs(node.right));

        // Update the maximum path sum encountered so far (with split).
        res = Math.max(res, leftSum + rightSum + node.val);

        // Return the maximum sum of the path (without split).
        return Math.max(leftSum, rightSum) + node.val;
    }

    dfs(root);
    return res;
};
