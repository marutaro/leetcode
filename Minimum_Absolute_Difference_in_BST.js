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
var getMinimumDifference = function(root) {
    let min_diff = Infinity;
    let prev_val = null;

    const inorder = function(node) {
        if (node.left) {
            inorder(node.left);
        }
        
        if (prev_val !== null) {
            min_diff = Math.min(min_diff, node.val - prev_val);
        }
        prev_val = node.val;

        if (node.right) {
            inorder(node.right);
        }
    };

    inorder(root);
    return min_diff;    
};
