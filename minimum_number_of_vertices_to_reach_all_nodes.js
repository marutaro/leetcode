/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function(n, edges) {
    let indegree = new Array(n).fill(0);
    let res = [];

    for (let edge of edges) {
        indegree[edge[1]]++;
    }

    for (let i = 0; i < n; i++) {
        if (indegree[i] === 0) {
            res.push(i);
        }
    }

    return res;    
};
