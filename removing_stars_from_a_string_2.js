/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    let count = 0;
    let res = "";

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === "*") {
            count++;
        } else if (count > 0) {
            count--;
        } else {
            res += s[i];
        }
    }

    return res.split("").reverse().join("");    
};
