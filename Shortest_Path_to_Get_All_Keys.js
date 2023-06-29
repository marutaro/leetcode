/**
 * @param {string[]} grid
 * @return {number}
 */
var shortestPathAllKeys = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const q = [];
    let found_keys = 0;

    const keys = { 'a': 0, 'b': 1, 'c': 2, 'd': 3, 'e': 4, 'f': 5 };
    const locks = { 'A': 0, 'B': 1, 'C': 2, 'D': 3, 'E': 4, 'F': 5 };

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (grid[r][c] === '@') {
          q.push([r, c, 0, 0]);
        } else if (grid[r][c] in keys) {
          found_keys += 1;
        }
      }
    }

    const visited = new Set();

    while (q.length > 0) {
      let [row, col, found, steps] = q.shift();
      const cur = grid[row][col];

      if ((cur in locks && !((found >> locks[cur]) & 1)) || cur === '#') {
        continue;
      }

      if (cur in keys) {
        found |= 1 << keys[cur];

        if (found === (1 << found_keys) - 1) {
          return steps;
        }
      }

      const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

      for (const [dr, dc] of directions) {
        const new_row = row + dr;
        const new_col = col + dc;

        if (
          0 <= new_row && new_row < rows &&
          0 <= new_col && new_col < cols &&
          !visited.has(`${new_row},${new_col},${found}`)
        ) {
          visited.add(`${new_row},${new_col},${found}`);
          q.push([new_row, new_col, found, steps + 1]);
        }
      }
    }

    return -1;    
};
