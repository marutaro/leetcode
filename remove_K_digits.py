class Solution:
    def removeKdigits(self, num: str, k: int) -> str:
        st = []

        for c in num:
            while k > 0 and st and st[-1] > c:
                st.pop()
                k -= 1
            st.append(c)
        
        # 12 345 k=3
        st = st[:len(st) - k]
        res = "".join(st)

        return str(int(res)) if res else "0"
