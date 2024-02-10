/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let res = 0;

    function count_palindrome(s, left, right) {
        let count = 0;
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            count++;
            left--;
            right++;
        }
        return count;
    }

    for (let i = 0; i < s.length; i++) {
        res += count_palindrome(s, i, i);
        res += count_palindrome(s, i, i + 1);
    }

    return res;    
};
