class Solution:
    def numTrees(self, n: int) -> int:
        
        dp = [1] * (n + 1) # [1,1,1,1,1]

        for nodes in range(2, n+1): # number of nodes
            total = 0
            # count each case like root is 1, root is 2...
            for root in range(1, nodes + 1):
                left = root - 1
                right = nodes - root
                total += dp[left] * dp[right]
            
            dp[nodes] = total
        
        return dp[n]
