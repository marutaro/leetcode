/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let majority1 = 0;
    let majority2 = 0;
    let count1 = 0;
    let count2 = 0;

    for (const num of nums) {
        if (num === majority1) {
            count1++;
        } else if (num === majority2) {
            count2++;
        } else if (count1 === 0) {
            majority1 = num;
            count1++;
        } else if (count2 === 0) {
            majority2 = num;
            count2++;
        } else {
            count1--;
            count2--;
        }
    }

    count1 = 0;
    count2 = 0;

    for (const num of nums) {
        if (num === majority1) {
            count1++;
        } else if (num === majority2) {
            count2++;
        }
    }

    const res = [];
    const n = nums.length;

    if (count1 > Math.floor(n / 3)) {
        res.push(majority1);
    }
    if (count2 > Math.floor(n / 3)) {
        res.push(majority2);
    }

    return res;    
};
