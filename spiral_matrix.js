/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    let x = 0;
    let y = 0;
    let dx = 1;
    let dy = 0;
    const res = [];

    for (let i = 0; i < rows * cols; i++) {
        res.push(matrix[y][x]);
        matrix[y][x] = ".";

        if (!(0 <= x + dx && x + dx < cols && 0 <= y + dy && y + dy < rows) || matrix[y+dy][x+dx] === ".") {
            [dx, dy] = [-dy, dx];
        }

        x += dx;
        y += dy;
    }

    return res;    
};
