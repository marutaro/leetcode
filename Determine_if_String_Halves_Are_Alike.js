/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    let left = 0, leftVowels = 0, rightVowels = 0;
    let right = s.length - 1;
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

    while (left < right) {
        if (vowels.has(s[left])) {
            leftVowels++;
        }
        if (vowels.has(s[right])) {
            rightVowels++;
        }

        left++;
        right--;
    }

    return leftVowels === rightVowels;    
};
