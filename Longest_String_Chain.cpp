class Solution {
public:
    int longestStrChain(vector<string>& words) {
        std::unordered_map<std::string, int> chains;  // Stores the max chain length for each word
        std::vector<std::string> sortedWords = words;
        std::sort(sortedWords.begin(), sortedWords.end(), [](const std::string& a, const std::string& b) {
            return a.length() < b.length();  // Sort words by length
        });

        for (const std::string& word : sortedWords) {
            chains[word] = 1;  // Initialize the chain length for the current word

            for (int i = 0; i < word.length(); i++) {
                std::string pred = word.substr(0, i) + word.substr(i + 1);  // Generate predecessor by removing one character
                if (chains.find(pred) != chains.end()) {
                    chains[word] = std::max(chains[word], chains[pred] + 1);
                }
            }
        }

        int maxChainLength = 0;
        for (const auto& entry : chains) {
            maxChainLength = std::max(maxChainLength, entry.second);
        }

        return maxChainLength;        
    }
};
