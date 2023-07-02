class Solution:
    def maximumRequests(self, n: int, requests: List[List[int]]) -> int:
        subset = []
        comb = []

        def generate_subset(start, remaining):
            if remaining == 0:
                comb.append(subset[:])
                return
            
            for i in range(start, len(requests)):
                subset.append(i)
                generate_subset(i + 1, remaining - 1)
                subset.pop()

        for req in range(len(requests), 0, -1):
            generate_subset(0, req)

            for c in comb:
                building = [0] * n

                for i in c:
                    building[requests[i][0]] -= 1
                    building[requests[i][1]] += 1
                
                if not any(building):
                    return req
        
        return 0
