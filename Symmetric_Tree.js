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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    const isMirror = (n1, n2) => {
        if (!n1 && !n2) {
            return true;
        }
        
        if (!n1 || !n2) {
            return false;
        }
        
        return n1.val === n2.val && isMirror(n1.left, n2.right) && isMirror(n1.right, n2.left);
    };
    
    return isMirror(root.left, root.right);
};
