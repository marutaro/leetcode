/**
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 */
var minTaps = function(n, ranges) {
    const maxRange = new Array(n + 1).fill(0);
    
    for (let i = 0; i < ranges.length; i++) {
        const left = Math.max(0, i - ranges[i]);
        const right = Math.min(n, i + ranges[i]);
        maxRange[left] = Math.max(maxRange[left], right);
    }
    
    let end = 0;
    let farthest = 0;
    let taps = 0;
    let i = 0;
    
    while (end < n) {
        while (i <= end) {
            farthest = Math.max(farthest, maxRange[i]);
            i++;
        }
        
        if (farthest <= end) {
            return -1;  // Unable to cover the entire garden
        }
        
        end = farthest;
        taps++;
    }
    
    return taps;    
};
