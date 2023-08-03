/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (!digits.length) {
        return [];
    }
    
    const digitToLetters = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };
    
    const res = [];
    
    function backtrack(idx, comb) {
        if (idx === digits.length) {
            res.push(comb);
            return;
        }
        
        for (const letter of digitToLetters[digits[idx]]) {
            backtrack(idx + 1, comb + letter);
        }
    }
    
    backtrack(0, "");
    
    return res;    
};
