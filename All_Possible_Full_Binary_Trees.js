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
var allPossibleFBT = function(n) {
    if (n % 2 === 0) {
      return [];
    }

    const memo = {};

    function generateFBT(n) {
      if (n === 1) {
        return [new TreeNode(0)];
      }

      if (memo[n]) {
        return memo[n];
      }

      const trees = [];
      for (let left = 1; left < n; left += 2) {
        const leftSubtrees = generateFBT(left);
        const rightSubtrees = generateFBT(n - left - 1);

        for (const l of leftSubtrees) {
          for (const r of rightSubtrees) {
            const root = new TreeNode(0, l, r);
            trees.push(root);
          }
        }
      }

      memo[n] = trees;
      return trees;
    }

    return generateFBT(n);    
};
