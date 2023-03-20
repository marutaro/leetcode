/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    if (!s || !words) {
      return [];
    }

    const wordFreq = {};
    for (const word of words) {
      wordFreq[word] = 1 + (wordFreq[word] || 0);
    }

    const wordLen = words[0].length;
    const windowLen = words.length * wordLen;

    const res = [];

    for (let i = 0; i < s.length - windowLen + 1; i++) {
      const substrFreq = {};
      let j = i;

      while (j < i + windowLen) {
        const curWord = s.slice(j, j + wordLen);

        if (!(curWord in wordFreq)) {
          break;
        }

        substrFreq[curWord] = (substrFreq[curWord] || 0) + 1;

        if (substrFreq[curWord] > wordFreq[curWord]) {
          break;
        }

        j += wordLen;
      }

      if (j === i + windowLen) {
        res.push(i);
      }
    }

    return res;
};
