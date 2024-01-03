/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
    let res = 0;
    let prev = 0;

    for (let r = 0; r < bank.length; r++) {
        let cur = 0;
        for (let c = 0; c < bank[0].length; c++) {
            if (bank[r][c] === "1") {
                cur += 1;
            }
        }

        res += cur * prev;

        if (cur > 0) {
            prev = cur;
        }
    }

    return res;    
};
