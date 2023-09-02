/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
var minExtraChar = function(s, dictionary) {
    class TrieNode {
        constructor() {
            this.children = {};
            this.isWord = false;
        }
    }

    const buildTrie = function(dictionary) {
        const root = new TrieNode();
        for (const word of dictionary) {
            let node = root;
            for (const ch of word) {
                if (!(ch in node.children)) {
                    node.children[ch] = new TrieNode();
                }
                node = node.children[ch];
            }
            node.isWord = true;
        }
        return root;
    }

    const root = buildTrie(dictionary);
    const n = s.length;
    const dp = new Array(n + 1).fill(Number.POSITIVE_INFINITY);
    dp[n] = 0;

    for (let start = n - 1; start >= 0; start--) {
        dp[start] = dp[start + 1] + 1;
        let node = root;
        for (let end = start; end < n; end++) {
            const char = s[end];
            if (!(char in node.children)) {
                break;
            }
            node = node.children[char];
            if (node.isWord) {
                dp[start] = Math.min(dp[start], dp[end + 1]);
            }
        }
    }

    return dp[0];    
};
