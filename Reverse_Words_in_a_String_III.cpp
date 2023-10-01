class Solution {
public:
    string reverseWords(string s) {
        // Split the input string into words
        istringstream iss(s);
        vector<std::string> words;
        string word;
        while (iss >> word) {
            // Reverse each word and add to the vector
            reverse(word.begin(), word.end());
            words.push_back(word);
        }
        
        // Join the reversed words to form the final result
        string result = "";
        for (const string& reversedWord : words) {
            result += reversedWord + " ";
        }
        result.pop_back();  // Remove the extra space at the end
        
        return result;        
    }
};
