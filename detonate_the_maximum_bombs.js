/**
 * @param {number[][]} bombs
 * @return {number}
 */
var maximumDetonation = function(bombs) {
    let reachable_bombs = {};
    let n = bombs.length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === j) {
                continue;
            }

            let [xi, yi, ri] = bombs[i];
            let [xj, yj] = bombs[j];

            if (ri ** 2 >= (xi - xj) ** 2 + (yi - yj) ** 2) {
                if (!reachable_bombs.hasOwnProperty(i)) {
                    reachable_bombs[i] = [];
                }
                reachable_bombs[i].push(j);
            }
        }
    }

    function bfs(start) {
        let visited = new Set();
        let queue = [start];
        visited.add(start);

        while (queue.length > 0) {
            let cur = queue.shift();
            for (let nei of reachable_bombs[cur] || []) {
                if (!visited.has(nei)) {
                    queue.push(nei);
                    visited.add(nei);
                }
            }
        }

        return visited.size;
    }

    let ans = 0;
    for (let i = 0; i < n; i++) {
        ans = Math.max(ans, bfs(i));
    }

    return ans;    
};
