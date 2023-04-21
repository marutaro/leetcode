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
var widthOfBinaryTree = function(root) {
    if (root === null) {
        return 0;
    }

    let max_width = 1;
    const q = [];
    q.push([root, 0]);

    while (q.length > 0) {
        const level_size = q.length;
        let start_index = q[0][1];
        let end_index = q[q.length - 1][1];
        max_width = Math.max(max_width, end_index - start_index + 1);

        for (let i = 0; i < level_size; ++i) {
            const node_index_pair = q.shift();
            const node = node_index_pair[0];
            const node_index = node_index_pair[1] - start_index;

            if (node.left !== null) {
                q.push([node.left, 2 * node_index + 1]);
            }

            if (node.right !== null) {
                q.push([node.right, 2 * node_index + 2]);
            }
        }
    }

    return max_width;
}
