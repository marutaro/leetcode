/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function(answerKey, k) {
    let windowSize = 0;
    let count = { T: 0, F: 0 };

    for (let right = 0; right < answerKey.length; right++) {
        count[answerKey[right]] += 1;
        let minor = Math.min(count["T"], count["F"]);

        if (minor <= k) {
            windowSize += 1;
        } else {
            count[answerKey[right - windowSize]] -= 1;
        }
    }

    return windowSize;    
};
