/**
 * @param {number[]} cookies
 * @param {number} k
 * @return {number}
 */
var distributeCookies = function(cookies, k) {
    const c = cookies.length;
    if (c === k) return Math.max(...cookies);

    let minCookies = Infinity;
    const dist = Array(k).fill(0);

    function backtracking(i) {
        if (i >= c) {
            minCookies = Math.min(minCookies, Math.max(...dist));
            return;
        } else if (Math.max(...dist) > minCookies) {
            return;
        }

        for (let person = 0; person < k; person++) {
            dist[person] += cookies[i];
            backtracking(i + 1);
            dist[person] -= cookies[i];
        }
    }

    backtracking(0);
    return minCookies;    
};
