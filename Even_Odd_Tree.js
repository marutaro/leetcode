// BFS
var isEvenOddTree = function(root) {
    let q = [];
    q.push([root, 0]);

    while (q.length) {
        let prev = null;
        let len = q.length;
        for (let i = 0; i < len; i++) {
            let [node, level] = q.shift();
            if (level % 2 === 0) {
                if (node.val % 2 === 0 || (prev !== null && prev >= node.val)) {
                    return false;
                }
            } else {
                if (node.val % 2 === 1 || (prev !== null && prev <= node.val)) {
                    return false;
                }
            }

            prev = node.val;

            if (node.left) {
                q.push([node.left, level + 1]);
            }
            if (node.right) {
                q.push([node.right, level + 1]);
            }
        }
    }
    return true;    
};

// DFS
var isEvenOddTree = function(root) {
    let prev = [];

    const dfs = (node, level) => {
        if (!node) {
            return true;
        }

        if (prev.length <= level) {
            prev.push(0);
        }

        if (level % 2 === 0) {
            if (node.val % 2 === 0 || (prev[level] && prev[level] >= node.val)) {
                return false;
            }
        } else {
            if (node.val % 2 === 1 || (prev[level] && prev[level] <= node.val)) {
                return false;
            }
        }

        prev[level] = node.val;

        const isLeftValid = dfs(node.left, level + 1);
        const isRightValid = dfs(node.right, level + 1);

        return isLeftValid && isRightValid;
    };

    return dfs(root, 0);    
};
