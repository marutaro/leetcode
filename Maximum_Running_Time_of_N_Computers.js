/**
 * @param {number} n
 * @param {number[]} batteries
 * @return {number}
 */
var maxRunTime = function(n, batteries) {
    batteries.sort((a, b) => a - b);
    const charging = batteries.slice(-n);
    let total_extra = batteries.slice(0, -n).reduce((acc, val) => acc + val, 0);
    
    for (let i = 0; i < n - 1; i++) {
        if (total_extra / (i + 1) < charging[i + 1] - charging[i]) {
            return charging[i] + Math.floor(total_extra / (i + 1));
        }
      
        total_extra -= (i + 1) * (charging[i + 1] - charging[i]);
    }
    
    return charging[charging.length - 1] + Math.floor(total_extra / n);    
};
