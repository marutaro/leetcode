class Solution:
    def jump(self, nums: List[int]) -> int:
        jumps = 0
        near = far = 0
        
        while far < len(nums) - 1:
            farthest = 0
            # check farthest position from current range
            for i in range(near, far + 1):
                farthest = max(farthest, i + nums[i])
            
            near = far + 1
            far = farthest
            jumps += 1
        
        return jumps
