/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr) {
    let uniqueComb = [''];
    let maxLengthResult = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < uniqueComb.length; j++) {
            let newComb = arr[i] + uniqueComb[j];

            if (new Set(newComb).size === newComb.length) {
                uniqueComb.push(newComb);
                maxLengthResult = Math.max(maxLengthResult, newComb.length);
            }
        }
    }

    return maxLengthResult;    
};
