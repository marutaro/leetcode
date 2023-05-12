/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    let left = 0;
    let right = people.length - 1;
    let boat = 0;
    people.sort((a, b) => a - b);

    while (left <= right) {
        boat += 1;

        if (people[left] + people[right] <= limit) {
            left += 1;
        }
        right -= 1;
    }

    return boat;    
};
