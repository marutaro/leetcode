/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a, b) => a - b);
    const res = [];

    function dfs(target, start, comb) {
        if (target < 0) {
            return;
        }

        if (target === 0) {
            res.push(comb.slice());
            return;
        }
        
        for (let i = start; i < candidates.length; i++) {

            if (i > start && candidates[i] === candidates[i-1]) {
                continue;
            }

            if (candidates[i] > target) {
                break;
            }

            dfs(target - candidates[i], i + 1, comb.concat(candidates[i]));
        }
    }

    dfs(target, 0, []);
    return res;
};
