/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let min_s = salary[0];
    let max_s = salary[0];
    let total = 0;
    let count = 0;

    for (let s of salary) {
        if (s < min_s) {
            min_s = s;
        } else if (s > max_s) {
            max_s = s;
        }
        total += s;
        count += 1;
    }

    return (total - min_s - max_s) / (count - 2);    
};
