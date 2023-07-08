class Solution:
    def putMarbles(self, weights: List[int], k: int) -> int:   
        scores = []
        for w1, w2 in zip(weights, weights[1:]):
            scores.append(w1 + w2)
        
        scores.sort()

        min_score = sum(scores[:k-1])
        max_score = sum(scores[len(scores) - k + 1:])

        return max_score - min_score
