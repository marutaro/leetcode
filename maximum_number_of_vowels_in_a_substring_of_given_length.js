/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    const vowels = new Set(["a", "e", "i", "o", "u"]);
    let max_vowels = 0;
    let cur_vowels = 0;

    for (let right = 0; right < s.length; right++) {
        if (vowels.has(s[right])) {
            cur_vowels++;
        }
            
        if (right >= k && vowels.has(s[right - k])) {
            cur_vowels--;
        }
            
        max_vowels = Math.max(max_vowels, cur_vowels);

        if (max_vowels == k) {
            return k;
        }
    }
        
    return max_vowels;    
};
