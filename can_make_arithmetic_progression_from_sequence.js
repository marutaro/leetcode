/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    let minimum = Math.min(...arr);
    let maximum = Math.max(...arr);
    let n = arr.length;

    let diff = Math.floor((maximum - minimum) / (n - 1));
    let nums = new Set(arr);

    if (diff === 0) {
        return nums.size === 1;
    }

    for (let i = minimum; i <= maximum; i += diff) {
        if (!nums.has(i)) {
            return false;
        }
    }

    return true;    
};
