class Solution {
public:
    int maxConsecutiveAnswers(string answerKey, int k) {
        int windowSize = 0;
        std::unordered_map<char, int> count;

        for (int right = 0; right < answerKey.length(); right++) {
            char currentChar = answerKey[right];
            count[currentChar] = count[currentChar] + 1;
            int minor = std::min(count['T'], count['F']);

            if (minor <= k) {
                windowSize += 1;
            } else {
                char leftChar = answerKey[right - windowSize];
                count[leftChar] = count[leftChar] - 1;
            }
        }

        return windowSize;       
    }
};
