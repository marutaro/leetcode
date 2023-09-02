class TrieNode {
public:
    unordered_map<char, TrieNode*> children;
    bool isWord;

    TrieNode() {
        isWord = false;
    }
};

class Solution {
public:
    int minExtraChar(string s, vector<string>& dictionary) {
        TrieNode* root = buildTrie(dictionary);
        int n = s.length();
        vector<int> dp(n + 1, INT_MAX);
        dp[n] = 0;

        for (int start = n - 1; start >= 0; start--) {
            dp[start] = dp[start + 1] + 1;
            TrieNode* node = root;
            for (int end = start; end < n; end++) {
                char ch = s[end];
                if (node->children.find(ch) == node->children.end()) {
                    break;
                }
                node = node->children[ch];
                if (node->isWord) {
                    dp[start] = min(dp[start], dp[end + 1]);
                }
            }
        }

        return dp[0];
    }

private:
    TrieNode* buildTrie(vector<string>& dictionary) {
        TrieNode* root = new TrieNode();
        for (const string& word : dictionary) {
            TrieNode* node = root;
            for (char ch : word) {
                if (node->children.find(ch) == node->children.end()) {
                    node->children[ch] = new TrieNode();
                }
                node = node->children[ch];
            }
            node->isWord = true;
        }
        return root;
    }
};
