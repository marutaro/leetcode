class Solution:
    def longestStrChain(self, words: List[str]) -> int:
        chains = {}
        sorted_words = sorted(words, key=len)

        for word in sorted_words:
            chains[word] = 1

            for i in range(len(word)):
                # word = abc, i = 0, word[:i] = "" + word[i+1:] = "bc" = "bc"
                # word = abc, i = 1, word[:i] = "a" + word[i+1:] = "c" = "ac"
                # word = abc, i = 2, word[:i] = "ab" + word[i+1:] = "" = "ab"                
                pred = word[:i] + word[i+1:]
                if pred in chains:
                    chains[word] = max(chains[word], chains[pred] + 1)
        
        return max(chains.values())
