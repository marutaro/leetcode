/**
 * @param {number} n
 * @param {number[][]} requests
 * @return {number}
 */
var maximumRequests = function(n, requests) {
    let subset = [];
    let comb = [];

    function generate_subset(start, remaining) {
        if (remaining === 0) {
            comb.push(subset.slice());
            return;
        }

        for (let i = start; i < requests.length; i++) {
            subset.push(i);
            generate_subset(i + 1, remaining - 1);
            subset.pop();
        }
    }

    for (let req = requests.length; req > 0; req--) {
        generate_subset(0, req);

        for (let c of comb) {
            let building = Array(n).fill(0);

            for (let i of c) {
                building[requests[i][0]] -= 1;
                building[requests[i][1]] += 1;
            }

            if (!building.some((balance) => balance !== 0)) {
                return req;
            }
        }
    }

    return 0;    
};
