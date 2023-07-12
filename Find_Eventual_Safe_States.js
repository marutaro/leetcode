/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function(graph) {
    const n = graph.length;
    const visited = new Array(n).fill(0); // 0: unvisited, 1: visiting, 2: terminal
    const result = [];

    function isSafe(node) {
        if (visited[node] > 0) {
            return visited[node] === 2;
        }

        visited[node] = 1;
        for (const neighbor of graph[node]) {
            if (!isSafe(neighbor)) {
                return false;
            }
        }

        visited[node] = 2;
        return true;
    }

    for (let i = 0; i < n; i++) {
        if (isSafe(i)) {
            result.push(i);
        }
    }

    return result;    
};
