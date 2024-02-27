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
var diameterOfBinaryTree = function(root) {
    let res = 0;

    var dfs = function(root) {
        if (!root) {
            return 0;
        }
        
        let l = dfs(root.left);
        let r = dfs(root.right);

        res = Math.max(res, l + r);

        return 1 + Math.max(l, r);
    };

    dfs(root);
    return res;    
};
