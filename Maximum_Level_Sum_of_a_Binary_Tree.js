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
var maxLevelSum = function(root) {
    let res = cur_level = 0;
    let cur_max = Number.NEGATIVE_INFINITY;
    let q = [root];

    while (q.length > 0) {
        let cur_total = 0;
        cur_level += 1;

        let len = q.length;
        for (let i = 0; i < len; i++) {
            let node = q.shift();
            cur_total += node.val;

            if (node.left) {
                q.push(node.left);
            }
            if (node.right) {
                q.push(node.right);
            }
        }

        if (cur_total > cur_max) {
            res = cur_level;
            cur_max = cur_total;
        }
    }

    return res;
    
};
