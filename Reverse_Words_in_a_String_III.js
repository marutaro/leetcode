/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    // Split the input string into words and reverse each word
    const words = s.split(' ');
    const reversedWords = words.map(word => word.split('').reverse().join(''));
    
    // Join the reversed words to form the final result
    return reversedWords.join(' ');    
};
