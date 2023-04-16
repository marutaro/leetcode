/**
 * @param {number[][]} piles
 * @param {number} k
 * @return {number}
 */
var maxValueOfCoins = function(piles, k) {
    let prev = new Array(k + 1).fill(0);

    for (let pile of piles) {
        let sumList = [0];
        let total = 0;
        for (let coin of pile) {
            total += coin;
            sumList.push(total);
        }

        let curMax = new Array(k + 1).fill(0);

        for (let n = 1; n <= k; n++) {
            let calcRange = Math.min(n + 1, sumList.length);
            for (let pos = 0; pos < calcRange; pos++) {
                curMax[n] = Math.max(curMax[n], sumList[pos] + prev[n - pos]);
            }
        }

        prev = curMax;
    }

    return prev[k];
};
