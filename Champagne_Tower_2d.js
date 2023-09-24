/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */
var champagneTower = function(poured, query_row, query_glass) {
    const pyramid = Array.from({ length: 101 }, (_, k) => Array(k + 1).fill(0.0));
    pyramid[0][0] = poured;

    for (let row = 0; row < query_row; row++) {
        for (let glass = 0; glass <= row; glass++) {
            const overflow = Math.max(0, (pyramid[row][glass] - 1.0) / 2.0);
            if (overflow > 0) {
                pyramid[row + 1][glass] += overflow;
                pyramid[row + 1][glass + 1] += overflow;
            }
        }
    }

    return Math.min(1.0, pyramid[query_row][query_glass]);    
};
