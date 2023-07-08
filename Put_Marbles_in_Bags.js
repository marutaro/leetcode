/**
 * @param {number[]} weights
 * @param {number} k
 * @return {number}
 */
var putMarbles = function(weights, k) {
    let scores = [];
    for (let i = 0; i < weights.length - 1; i++) {
        scores.push(weights[i] + weights[i + 1]);
    }
    
    scores.sort((a, b) => a - b);

    let minScore = scores.slice(0, k - 1).reduce((acc, val) => acc + val, 0);
    let maxScore = scores.slice(scores.length - k + 1).reduce((acc, val) => acc + val, 0);

    return maxScore - minScore;    
};
