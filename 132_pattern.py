class Solution:
    def find132pattern(self, nums: List[int]) -> bool:
        
        st = []
        cur_min = nums[0]

        for n in nums[1:]:
            while st and n >= st[-1][0]:
                st.pop()
            
            if st and n > st[-1][1]:
                return True
            
            st.append([n, cur_min])
            cur_min = min(cur_min, n)
        
        return False
