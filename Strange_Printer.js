/**
 * @param {string} s
 * @return {number}
 */
var strangePrinter = function(s) {
    const memo = {};

    function min_turns_to_print(start, end) {
        if (start > end) {
            return 0;
        }
        
        if (memo.hasOwnProperty(`${start}-${end}`)) {
            return memo[`${start}-${end}`];
        }
        
        let res = min_turns_to_print(start, end - 1) + 1;

        for (let middle = start; middle < end; middle++) {
            if (s[middle] === s[end]) {
                res = Math.min(res, min_turns_to_print(start, middle) + min_turns_to_print(middle + 1, end - 1));
            }
        }
        
        memo[`${start}-${end}`] = res;
        return res;
    }

    return min_turns_to_print(0, s.length - 1);    
};
