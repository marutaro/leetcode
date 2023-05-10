/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let x = 0, y = 0, dx = 1, dy = 0;
    let res = Array.from({length: n}, () => Array.from({length: n}, () => 0));

    for (let i = 0; i < n * n; i++) {
        res[y][x] = i + 1;

        if (!(0 <= x + dx && x + dx < n && 0 <= y + dy && y + dy < n && res[y+dy][x+dx] === 0)) {
            [dx, dy] = [-dy, dx];
        }
                
        x += dx;
        y += dy;
    }

    return res;    
};
