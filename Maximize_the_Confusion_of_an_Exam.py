class Solution:
    def maxConsecutiveAnswers(self, answerKey: str, k: int) -> int:
        window_size = 0
        count = {"T":0, "F":0}

        for right in range(len(answerKey)):
            count[answerKey[right]] += 1
            minor = min(count["T"], count["F"])

            if minor <= k:
                window_size += 1
            else:
                count[answerKey[right - window_size]] -= 1
        
        return window_size
