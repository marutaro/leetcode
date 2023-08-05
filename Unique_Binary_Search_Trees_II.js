/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
   if (n === 0) {
        return [];
    }
    
    const memo = new Map();

    function generateTreesHelper(start, end) {
        if (memo.has(`${start}-${end}`)) {
            return memo.get(`${start}-${end}`);
        }
        
        const trees = [];
        if (start > end) {
            trees.push(null);
            return trees;
        }
        
        for (let rootVal = start; rootVal <= end; rootVal++) {
            const leftTrees = generateTreesHelper(start, rootVal - 1);
            const rightTrees = generateTreesHelper(rootVal + 1, end);
            
            for (const leftTree of leftTrees) {
                for (const rightTree of rightTrees) {
                    const root = new TreeNode(rootVal, leftTree, rightTree);
                    trees.push(root);
                }
            }
        }
        
        memo.set(`${start}-${end}`, trees);
        return trees;
    }

    return generateTreesHelper(1, n);    
};
