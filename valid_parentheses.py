class Solution:
    def isValid(self, s: str) -> bool:
        st = []
        
        for c in s:
            if st:
                last = st[-1]
                if self.is_pair(last, c):
                    st.pop()
                    continue
                    
            st.append(c)
            
        # return True if not st else False
        return not st
    
    def is_pair(self, last, current):
        if last == "(" and current == ")" or last == "[" and current == "]" or last == "{" and current == "}":
            return True
        return False
