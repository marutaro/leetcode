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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
        if (!root) {
            return [];
        }
        
        const res = [];
        const queue = [root];
        let isLeft = true;

        while (queue.length > 0) {
            const levelSize = queue.length;
            const level = Array(levelSize).fill(0);

            for (let i = 0; i < levelSize; i++) {
                const node = queue.shift();
                const index = isLeft ? i : levelSize - i - 1;
                level[index] = node.val;

                if (node.left) {
                    queue.push(node.left);
                }
                if (node.right) {
                    queue.push(node.right);
                }
            }
            
            res.push(level);
            isLeft = !isLeft;
        }
        
        return res;    
};
