/**
 * @param {number[]} costs
 * @param {number} k
 * @param {number} candidates
 * @return {number}
 */
var totalCost = function(costs, k, candidates) {
    const pq = new MaxPriorityQueue({
        compare: (a, b) => (a[0] != b[0] ? a[0] - b[0] : a[1] - b[1]),
    });

    let start = 0;
    let end = costs.length - 1;
    let ans = 0;

    while (start < Math.min(candidates, costs.length)) {
        pq.enqueue([costs[start], start, true]);
        start++;
    }

    start--;
    while (end > start && end >= costs.length - candidates) {
        pq.enqueue([costs[end], end, false]);
        end--;
    }
    end++;

    for (let i = 0; i < Math.min(k, costs.length); i++) {
        const [cost, idx, fromStart] = pq.dequeue();
        ans += cost;
        if (fromStart) {
        if (start < end - 1) {
            start++;
            pq.enqueue([costs[start], start, true]);
        }
        } else {
            if (start < end - 1) {
                end--;
                pq.enqueue([costs[end], end, false]);
            }
        }
    }
    
    return ans;    
};
