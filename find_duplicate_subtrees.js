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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
    const res = [];
    const subtrees = {};

    const traverse = function(node) {
        if (!node) {
            return "#";
        }

        const key = node.val + "," + traverse(node.left) + "," + traverse(node.right);

        if (key in subtrees) {
            subtrees[key].push(node);
        } else {
            subtrees[key] = [node];
        }

        if (subtrees[key].length === 2) {
            res.push(subtrees[key][0]);
        }

        return key;
    };

    traverse(root);
    return res;    
};
