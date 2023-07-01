class Solution:
    def distributeCookies(self, cookies: List[int], k: int) -> int:
        c = len(cookies)
        if c == k: return max(cookies)

        min_cookies = float("inf")
        dist = [0] * k

        def backtracking(i):
            nonlocal min_cookies

            if i >= c:
                min_cookies = min(min_cookies, max(dist))
                return
            elif max(dist) > min_cookies:
                return
            
            for person in range(k):
                dist[person] += cookies[i]
                backtracking(i + 1)
                dist[person] -= cookies[i]

        backtracking(0)
        return min_cookies
