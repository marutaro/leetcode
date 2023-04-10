/**
 * @param {string} colors
 * @param {number[][]} edges
 * @return {number}
 */
var largestPathValue = function(colors, edges) {
    const graph = new Map();
    const indegree = new Array(colors.length).fill(0);

    for (const [u, v] of edges) {
        if (u === v) return -1;
        graph.set(u, (graph.get(u) || []).concat(v));
        indegree[v]++;
    }

    const q = [];
    for (let i = 0; i < colors.length; i++) {
        if (indegree[i] === 0) q.push(i);
    }

    const dp = Array.from({ length: colors.length }, () => Array(26).fill(0));
    let maxColor = 0;

    while (q.length) {
        const vertex = q.shift();
        const color = colors.charCodeAt(vertex) - 97;
        dp[vertex][color]++;
        maxColor = Math.max(maxColor, dp[vertex][color]);

        if (!graph.has(vertex)) continue;

        for (const nei of graph.get(vertex)) {
            indegree[nei]--;

            for (let c = 0; c < 26; c++) {
                dp[nei][c] = Math.max(dp[nei][c], dp[vertex][c]);
            }

            if (indegree[nei] === 0) q.push(nei);
        }
    }

    return indegree.some(x => x > 0) ? -1 : maxColor;    
};
