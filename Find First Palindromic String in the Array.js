// solution 1

/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for (let word of words) {
        if (word === word.split('').reverse().join('')) {
            return word;
        }
    }
    return '';    
};



// solution 2
/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for (let word of words) {
        let left = 0;
        let right = word.length - 1;
        
        while (word[left] === word[right]) {
            left++;
            right--;
            if (left >= right) {
                return word;
            }
        }
    }
    return '';    
};
