// Solution 1
var findBottomLeftValue = function(root) {
    let queue = [];
    queue.push(root);
    let res = root.val;

    while (queue.length > 0) {
        res = queue[0].val;
        let levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift();
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
    }

    return res;    
};

// Solution 2
var findBottomLeftValue = function(root) {
    let queue = [];
    queue.push(root);
    let res = root.val;

    while (queue.length > 0) {
        let node = queue.shift();
        res = node.val;
        if (node.right) {
            queue.push(node.right);
        }
        if (node.left) {
            queue.push(node.left);
        }
    }

    return res;    
};
// Solution 3
var findBottomLeftValue = function(root) {
    let maxDepth = 0;
    let res = null;

    const dfs = (node, depth) => {
        if (!node) return;

        if (depth > maxDepth) {
            maxDepth = depth;
            res = node.val;
        }

        dfs(node.left, depth + 1);
        dfs(node.right, depth + 1);
    };

    dfs(root, 1);
    return res;    
};
