/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
    let s = "123456789";
    let res = [];

    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j < s.length; j++) {
            let num = parseInt(s.substring(i, j + 1));

            if (num > high) break;
            if (low <= num) res.push(num);
        }
    }

    return res.sort((a, b) => a - b);    
};
