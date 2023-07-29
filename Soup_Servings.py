class Solution:
    def soupServings(self, n: int) -> float:
        if n >= 4300:
            return 1.0
        
        memo = {}

        def serve(A, B):
            if (A, B) in memo:
                return memo[(A, B)]
            
            # probability of A that is empty first
            if A <= 0 and B <= 0:
                return 0.5
            if A <= 0:
                return 1.0
            if B <= 0:
                return 0.0
            
            prob = 0.25 * (serve(A - 100, B) + serve(A - 75, B - 25) + serve(A - 50, B - 50) + serve(A - 25, B - 75))
            memo[(A, B)] = prob
            return prob

        return serve(n, n)
