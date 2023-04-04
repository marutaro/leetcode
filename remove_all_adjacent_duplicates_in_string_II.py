class Solution:
    def removeDuplicates(self, s: str, k: int) -> str:
        if len(s) < k:
            return s
        
        st = []

        for c in s:
            if st and c == st[-1][0]:
                st[-1][-1] += 1

                if st[-1][-1] == k:
                    st.pop()
            else:
                st.append([c, 1])
        
        res = ""
        for char, count in st:
            res += char * count
        
        return res
