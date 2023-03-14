/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    let row = triangle.length;
    let memo = [...triangle[row-1]];

    for (let r = row-2; r >= 0; r--) {
        for (let c = 0; c <= r; c++) {
            memo[c] = Math.min(memo[c], memo[c+1]) + triangle[r][c];
        }
    }
    
    return memo[0];
};
