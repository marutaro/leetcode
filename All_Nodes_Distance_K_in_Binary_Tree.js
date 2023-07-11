/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function(root, target, k) {
    const neighbors = new Map();

    function buildNeighbors(node, parent) {
        if (!node) return;

        if (parent) {
            if (!neighbors.has(node)) {
                neighbors.set(node, []);
            }
            neighbors.get(node).push(parent);

            if (!neighbors.has(parent)) {
                neighbors.set(parent, []);
            }
            neighbors.get(parent).push(node);
        }

        buildNeighbors(node.left, node);
        buildNeighbors(node.right, node);
    }

    buildNeighbors(root, null);

    const queue = [];
    const visited = new Set();
    const res = [];

    queue.push([target, 0]);
    visited.add(target);

    while (queue.length > 0) {
        const [node, dis] = queue.shift();

        if (dis === k) {
            res.push(node.val);
        }

        if (dis > k) break;

        for (const nei of neighbors.get(node) || []) {
            if (!visited.has(nei)) {
                visited.add(nei);
                queue.push([nei, dis + 1]);
            }
        }
    }

    return res;    
};
