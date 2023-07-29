/**
 * @param {number} n
 * @return {number}
 */
var soupServings = function(n) {
    if (n >= 4300) {
        return 1.0;
    }

    const memo = new Map();

    function serve(A, B) {
        if (memo.has(`${A}-${B}`)) {
            return memo.get(`${A}-${B}`);
        }

        if (A <= 0 && B <= 0) {
            return 0.5;
        }
        if (A <= 0) {
            return 1.0;
        }
        if (B <= 0) {
            return 0.0;
        }

        const prob = 0.25 * (serve(A - 100, B) + serve(A - 75, B - 25) + serve(A - 50, B - 50) + serve(A - 25, B - 75));
        memo.set(`${A}-${B}`, prob);
        return prob;
    }

    return serve(n, n);    
};
