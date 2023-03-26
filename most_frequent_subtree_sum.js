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
 * @return {number[]}
 */
var findFrequentTreeSum = function(root) {
    const freq = {};

    function dfs(node) {
        if (!node) {
            return 0;
        }

        // calculate the subtree sum recursively
        const leftSum = dfs(node.left);
        const rightSum = dfs(node.right);

        const subtreeSum = leftSum + rightSum + node.val;
        // increment the frequency of the subtree sum
        freq[subtreeSum] = 1 + (freq[subtreeSum] || 0);

        return subtreeSum;
    }

    dfs(root);

    const maxFreq = Math.max(...Object.values(freq));
    return Object.entries(freq)
        .filter(([sum, freq]) => freq === maxFreq)
        .map(([sum, freq]) => parseInt(sum));    
};
