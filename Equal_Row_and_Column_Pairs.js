/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    let count = 0;
    const n = grid.length;
    const row = {};

    for (let i = 0; i < n; i++) {
        row[JSON.stringify(grid[i])] = 1 + (row[JSON.stringify(grid[i])] || 0);
    }

    for (let c = 0; c < n; c++) {
        const col = [];
        for (let i = 0; i < n; i++) {
            col.push(grid[i][c]);
        }

        if (JSON.stringify(col) in row) {
            count += row[JSON.stringify(col)];
        }
    }

    return count;    
};
