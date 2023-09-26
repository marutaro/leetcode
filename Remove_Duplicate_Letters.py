class Solution:
    def removeDuplicateLetters(self, s: str) -> str:
        last_occur = {}

        for i, char in enumerate(s):
            last_occur[char] = i
        
        stack = []
        visited = set()

        for i in range(len(s)):
            if s[i] in visited:
                continue
            
            while stack and stack[-1] > s[i] and last_occur.get(stack[-1], -1) > i:
                visited.remove(stack.pop())
            
            visited.add(s[i])
            stack.append(s[i])
        
        return "".join(stack)
