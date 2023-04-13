class Solution:
    def validateStackSequences(self, pushed: List[int], popped: List[int]) -> bool:

        st = []
        i = 0

        for n in pushed:
            st.append(n)

            while st and st[-1] == popped[i]:
                st.pop()
                i += 1
        
        return i == len(popped)
