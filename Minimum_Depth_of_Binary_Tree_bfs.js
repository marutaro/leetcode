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
var minDepth = function(root) {
    if (!root) {
        return 0;
    }
    
    const left = minDepth(root.left);
    const right = minDepth(root.right);

    if (left === 0) {
        return right + 1;
    } else if (right === 0) {
        return left + 1;
    }
    
    return Math.min(left, right) + 1;    
};
